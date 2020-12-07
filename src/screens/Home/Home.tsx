import React from "react";
// import { Dimensions, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Data from "../../data";

import { Box, Header, Text, Card } from "../../components";
import { Image, ScrollView } from "react-native";
import { theme } from "../../components/Theme";

// const { width } = Dimensions.get("window");

interface HeaderProps {}

const Home = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Box flex={1} backgroundColor="white" paddingHorizontal="m">
      <Header
        title="الرئيسية"
        left={{ icon: "menu", onPress: () => true }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text variant="title1">👑مطعم التاج👑</Text>
        <Text variant="body">اختر وجبتك بعناية</Text>
        <Box justifyContent="space-between" flexDirection="row" marginTop="l">
          <Text variant="button" onPress={() => navigation.navigate("Parts")}>
            مشاهد الكل
          </Text>
          <Text variant="title2" fontSize={20}>
            الاقسام
          </Text>
        </Box>
        <Box flexDirection="row" justifyContent="center" marginTop="l">
          <Box flex={1} justifyContent="center" alignItems="center">
            {Data.parts
              .filter((item, index) => index <= 3)
              .filter((_, i) => i % 2 !== 0)
              .map((item, index) => {
                return <Card key={index} item={item} />;
              })}
          </Box>
          <Box justifyContent="center" alignItems="center">
            {Data.parts
              .filter((item, index) => index <= 3)
              .filter((_, i) => i % 2 === 0)
              .map((item, index) => {
                return <Card key={index} item={item} />;
              })}
          </Box>
        </Box>
        <Box justifyContent="flex-end" marginVertical="l">
          <Text variant="title2" fontSize={20}>
            وجبات مميزة
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Data.bestFood.map((item, index) => {
              return (
                <Box
                  key={index}
                  margin="s"
                  backgroundColor="darkGrey"
                  borderRadius="l"
                  height={150}
                  width={150}
                >
                  <Image
                    style={{
                      resizeMode: "cover",
                      height: 100,
                      width: 150,
                      borderTopLeftRadius: theme.borderRadii.l,
                      borderTopRightRadius: theme.borderRadii.l,
                    }}
                    source={{ uri: item.img }}
                  />
                  <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginHorizontal="s"
                  >
                    <Text variant="button" color="white">
                      {item.title}
                    </Text>
                    <Text variant="header" color="white">
                      {item.price}$
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </ScrollView>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;
