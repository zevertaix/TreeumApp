import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../theme";

interface IAlbumCard {
  title: string;
  artistName: string;
  image: string;
  playsCount: number;
  onPress: () => void;
}

const AlbumCard = ({
  title,
  artistName,
  image,
  playsCount,
  onPress,
}: IAlbumCard) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={{ uri: image || "https://iili.io/HlHy9Yx.png" }}
        style={styles.image}
      />
      <View style={styles.badge}>
        <Text style={styles.badgeLabel}>{playsCount}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artist}>{artistName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "46%",
    gap: 4,
  },
  image: {
    width: "auto",
    aspectRatio: 1,
    borderRadius: 10,
  },
  title: {
    color: "#393939",
    fontSize: 16,
    fontWeight: "700",
  },
  artist: {
    color: "#989898",
    fontSize: 13,
  },
  badge: {
    position: "absolute",
    backgroundColor: colors.orange,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    top: 5,
    right: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  badgeLabel: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "700",
  },
});

export default AlbumCard;
