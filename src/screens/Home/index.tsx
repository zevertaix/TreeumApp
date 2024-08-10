import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import colors from "../../theme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTopAlbums, selectAlbums } from "../../redux/reducers/albumsSlice";
import { AlbumCard } from "../../components";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const albums = useAppSelector(selectAlbums);

  useEffect(() => {
    dispatch(fetchTopAlbums());
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <FlatList
        data={albums?.topalbums.album}
        numColumns={2}
        keyExtractor={(item) => item.url + item.mbid}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
        renderItem={({ item }) => {
          console.log(item.image.filter((el) => el.size === "large"));
          return (
            <AlbumCard
              playsCount={item.playcount}
              title={item.name}
              artistName={item.artist.name}
              image={item.image.filter((el) => el.size === "large")[0]["#text"]}
            />
          );
        }}
      />
    </SafeAreaView>
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
