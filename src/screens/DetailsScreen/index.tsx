import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchArtist, selectArtist } from "../../redux/reducers/albumsSlice";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParams } from "../../navigation/MainStack";

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
    <View>
      <Text>{artist?.bio.summary}</Text>
    </View>
  );
};

export default DetailsScreen;
