import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchArtist,
  selectAlbumsQueryStatuses,
  selectArtist,
} from "../../redux/reducers/albumsSlice";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParams } from "../../navigation/MainStack";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";
import { FullScreenLoader } from "../../components";

const DetailsScreen = () => {
  const dispatch = useAppDispatch();
  const artist = useAppSelector(selectArtist);
  const queryStatuses = useAppSelector(selectAlbumsQueryStatuses);
  const { params } = useRoute<RouteProp<MainStackParams, "Details">>();

  useEffect(() => {
    if (params?.artistName && !artist) {
      dispatch(fetchArtist({ artist: params.artistName }));
    }
  }, [params, artist]);

  return (
    <SafeAreaView style={styles.container}>
      {!queryStatuses.fetchArtist && artist ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.bioTitle}>Biography of {params.artistName}</Text>
          <Text style={styles.description}>
            {artist?.bio?.summary || "No information"}
          </Text>
          <Text style={styles.bioTitle}>
            Details about "{params.album.name}"
          </Text>
          <Text style={styles.description}>
            {params.album?.wiki?.summary || "No information"}
          </Text>
        </ScrollView>
      ) : (
        <FullScreenLoader />
      )}
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
  description: { textAlign: "justify" },
});

export default DetailsScreen;
