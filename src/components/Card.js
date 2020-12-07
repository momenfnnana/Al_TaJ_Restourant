import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, Box } from "./Theme";

const width = Dimensions.get("window").width;

const Card = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const partSize = width / 3;
  console.log("partSize", partSize);
  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}>
      <Box
        margin="s"
        justifyContent="center"
        alignItems="center"
        padding="l"
        borderRadius="l"
        backgroundColor={selected === true ? "danger" : "grey"}
        width={partSize*1.2}
        height={partSize}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={{ uri: `${item.img}` }}
        />
        <Text variant="body" color={selected === true ? "white" : "black"} fontSize={12}>
          {item.name}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
export default Card;
