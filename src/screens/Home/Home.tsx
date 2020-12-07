import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text, Header } from "../../components";

interface HeaderProps {}

const Home = (props: HeaderProps) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <Header title="asdasdasd"/>
    </Box>
  );
};

export default Home;
