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
  selectAlbum,
  selectAlbumsQueryStatuses,
} from "../../redux/reducers/albumsSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";
import InfoSVG from "../../assets/icons/InfoSVG";
import { fancyTimeFormat } from "../../helpers/formatTime";

const AlbumScreen = () => {
  const dispatch = useAppDispatch();
  const album = useAppSelector(selectAlbum);
  const queryStatuses = useAppSelector(selectAlbumsQueryStatuses);
  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const { params } = useRoute<RouteProp<MainStackParams, "Album">>();

  useEffect(() => {
    dispatch(fetchAlbum(params));
  }, []);
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 16, flex: 1, backgroundColor: colors.white }}
    >
      {!queryStatuses.fetchAlbum && album && (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                gap: 6,
                justifyContent: "space-between",
                flex: 1,
                paddingRight: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 34,
                    color: colors.text,
                    fontWeight: "700",
                  }}
                >
                  {album?.artist}
                </Text>
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
              <Text
                style={{
                  fontSize: 16,
                  color: colors.text,
                  fontWeight: "500",
                }}
              >
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
            ItemSeparatorComponent={() => (
              <View
                style={{ height: 1, width: "100%", backgroundColor: "#dddddd" }}
              />
            )}
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
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default AlbumScreen;
