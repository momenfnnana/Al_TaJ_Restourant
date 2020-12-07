import React from "react";
import { ScrollView, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Box, Text, useTheme, Button } from "../../../components";

const data = [
  {
    title: "عنوان رئيسي 1",
    subtitle:
      "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
    image: require("../../../../assets/images/onBoarding/onBoarding1.png"),
    backgroundColor: "#fff",
  },
  {
    title: "عنوان رئيسي 2",
    subtitle:
      "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
    image: require("../../../../assets/images/onBoarding/onBoarding3.png"),
    backgroundColor: "#fff",
  },
  {
    title: "عنوان رئيسي 3",
    subtitle:
      "لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.",
    image: require("../../../../assets/images/onBoarding/onBoarding3.png"),
    backgroundColor: "#fff",
  },
];

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const theme = useTheme();
  const Top = theme.borderRadii.xl;
  const imageWidth = width / 1.2;
  const length = data.length - 1;
  const navigation = useNavigation();
  return (
    <>
      <ScrollView horizontal pagingEnabled>
        {data.map((item, index) => {
          return (
            <Box key={index} width={width}>
              <Box
                style={{
                  flex: 1,
                  marginVertical: Top,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ resizeMode: "contain", width: imageWidth }}
                  source={item.image}
                />
                <Text
                  variant="title1"
                  style={{ alignSelf: "center", textAlign: "center" }}
                >
                  {item.title}
                </Text>
                <Text
                  variant="title3"
                  style={{ alignSelf: "center", textAlign: "center" }}
                >
                  {item.subtitle}
                </Text>
                {index == length && (
                  <Button
                    label="تسجيل الدخول"
                    onPress={() => navigation.navigate("SignUp")}
                    variant="primary"
                    width={width / 1.7}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Onboarding;
