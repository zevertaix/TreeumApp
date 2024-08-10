import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchArtist, selectArtist } from "../../redux/reducers/albumsSlice";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParams } from "../../navigation/MainStack";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";

const DetailsScreen = () => {
  const dispatch = useAppDispatch();
  const artist = useAppSelector(selectArtist);
  const { params } = useRoute<RouteProp<MainStackParams, "Details">>();

  useEffect(() => {
    if (params?.artistName) {
      dispatch(fetchArtist({ artist: params.artistName }));
    }
  }, [params]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.bioTitle}>Biography of {params.artistName}</Text>
        <Text style={{ textAlign: "justify" }}>
          {artist?.bio?.summary || "No information"}
        </Text>
        <Text style={styles.bioTitle}>Details about "{params.album.name}"</Text>
        <Text style={{ textAlign: "justify" }}>
          {params.album?.wiki?.summary || "No information"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  bioTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
    marginVertical: 12,
  },
});

export default DetailsScreen;
