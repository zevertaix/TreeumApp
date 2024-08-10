import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import colors from "../../theme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchTopAlbums,
  selectAlbums,
  selectAlbumsQueryStatuses,
} from "../../redux/reducers/albumsSlice";
import { AlbumCard, FullScreenLoader } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParams } from "../../navigation/MainStack";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const albums = useAppSelector(selectAlbums);
  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const queryStatuses = useAppSelector(selectAlbumsQueryStatuses);

  useEffect(() => {
    dispatch(fetchTopAlbums());
  }, []);

  return (
    <View style={styles.container}>
      {!queryStatuses.fetchTopAlbums ? (
        <FlatList
          data={albums?.topalbums?.album}
          numColumns={2}
          keyExtractor={(item) => item.url + item.mbid}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            paddingBottom: insets.bottom,
            paddingTop: insets.top,
          }}
          renderItem={({ item }) => {
            console.log(item.image.filter((el) => el.size === "large"));
            return (
              <AlbumCard
                onPress={() =>
                  navigation.navigate("Album", {
                    artist: item.artist.name,
                    album: item.name,
                  })
                }
                playsCount={item.playcount}
                title={item.name}
                artistName={item.artist.name}
                image={
                  item.image.filter((el) => el.size === "large")[0]["#text"]
                }
              />
            );
          }}
        />
      ) : (
        <FullScreenLoader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    gap: 30,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
