import React from "react";
// import { Dimensions, Image, FlatList } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import Data from "../../data";

import { Box, Header, Text, Card } from "../../components";

// const { width } = Dimensions.get("window");

interface HeaderProps {}

const Parts = (props: HeaderProps, { navigation }) => {
  // const navigation = useNavigation();
  return (
    <Box flex={1} backgroundColor="white" paddingHorizontal="m">
      <Header
        title="الاقسام"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Text variant="title1">👑مطعم التاج👑</Text>
      <Text variant="body">اختر وجبتك بعناية</Text>
      <Box justifyContent="flex-end" flexDirection="row" marginTop="l">
        <Text variant="title2" fontSize={20}>
          الاقسام
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="center" marginTop="l">
        <Box justifyContent="center" alignItems="center" marginBottom="xl">
          {Data.parts
            .filter((_, i) => i % 2 !== 0)
            .map((item, index) => {
              return <Card key={index} item={item} index={index} />;
            })}
        </Box>
        <Box justifyContent="center" alignItems="center" marginBottom="xl">
          {Data.parts
            .filter((_, i) => i % 2 === 0)
            .map((item, index) => {
              return <Card key={index} item={item} index={index} />;
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Parts;
