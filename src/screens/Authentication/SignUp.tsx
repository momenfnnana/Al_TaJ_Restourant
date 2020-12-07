import * as React from "react";
import { StyleSheet, Image, Dimensions, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useTheme, Button, Text } from "../../components";
import { theme } from "../../components/Theme";

interface SignUpProps {}
const { width } = Dimensions.get("window");
const SignUp = (props: SignUpProps) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const imageWidth = width / 2;
  const topSpacing = theme.spacing.xl * 2;
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: insets.top }}
      width={width}
    >
      <Box flex={0.3} style={{ marginTop: topSpacing }}>
        <Image
          style={{
            flex: 1,
            width,
            resizeMode: "contain",
          }}
          source={require("../../../assets/images/AL_TAJ_Logo.png")}
        />
      </Box>
      <Box
        flex={0.7}
        justifyContent="center"
        alignItems="flex-end"
        width={width}
      >
        <TextInput style={styles.textInput} placeholder="اسم المستخدم" />
        <TextInput style={styles.textInput} placeholder="الايميل" />
        <TextInput style={styles.textInput} placeholder="كلمة المرور" />
        <Box alignSelf="center" marginTop="l">
          <Button
            label="انشاء حساب"
            variant="primary"
            onPress={() => navigation.navigate("Main")}
            width={width / 1.3}
          />
        </Box>
      </Box>
      <Text variant="button">
        {" "}
        بالفعل لدي حساب{" "}
        <Text variant="button" onPress={() => navigation.navigate("Login")}>
          {" "}
          تسجيل الدخول{" "}
        </Text>
      </Text>
    </Box>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#F4F0EF",
    borderColor: theme.colors.danger + 50,
    borderBottomWidth: 1,
    width: width / 1.3,
    alignSelf: "center",
    margin: theme.spacing.l,
    marginHorizontal: theme.borderRadii.l,
  },
});
