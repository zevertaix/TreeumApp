import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MainStackParams } from "../../navigation/MainStack";
import {
  fetchAlbum,
  resetAlbum,
  selectAlbum,
  selectAlbumsQueryStatuses,
} from "../../redux/reducers/albumsSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";
import InfoSVG from "../../assets/icons/InfoSVG";
import { fancyTimeFormat } from "../../helpers/formatTime";
import { FullScreenLoader } from "../../components";

const AlbumScreen = () => {
  const dispatch = useAppDispatch();
  const album = useAppSelector(selectAlbum);
  const queryStatuses = useAppSelector(selectAlbumsQueryStatuses);
  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const { params } = useRoute<RouteProp<MainStackParams, "Album">>();

  useEffect(() => {
    dispatch(fetchAlbum(params));

    return () => {
      dispatch(resetAlbum());
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!queryStatuses.fetchAlbum && album ? (
        <>
          <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.topContainer}>
                <Text style={styles.artistLabel}>{album?.artist}</Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Details", {
                      artistName: album?.artist,
                      album,
                    })
                  }
                >
                  <InfoSVG width={30} height={30} />
                </Pressable>
              </View>
              <Text style={styles.listenersLabel}>
                Listeners: {album?.listeners}
              </Text>
            </View>
            <Image
              style={styles.image}
              source={{
                uri: album?.image.filter((el) => el.size === "large")[0][
                  "#text"
                ],
              }}
            />
          </View>
          <View style={styles.greenDivider} />
          <FlatList
            data={album?.tracks?.track || []}
            ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.rowContainer}>
                  <Text>{item.name}</Text>
                  <Text>{fancyTimeFormat(item.duration) || "-"}</Text>
                </View>
              );
            }}
          />
        </>
      ) : (
        <FullScreenLoader />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  greenDivider: {
    backgroundColor: colors.accent,
    height: 2,
    borderRadius: 5,
    width: "100%",
    marginVertical: 20,
  },
  artistLabel: {
    fontSize: 34,
    color: colors.text,
    fontWeight: "700",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  leftContainer: {
    gap: 6,
    justifyContent: "space-between",
    flex: 1,
    paddingRight: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listenersLabel: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "500",
  },
  listSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#dddddd",
  },
});

export default AlbumScreen;
