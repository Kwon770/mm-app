import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Theme from "../style/Theme";
import RestaurantMenu from "../components/Home/RestaurantMenu";
import logo_text from "../assets/logo_text.png";
import ButtonPart from "../components/Home/ButtonPart";
import SearchbarPart from "../components/Home/SearchbarPart";
import LogoPart from "../components/Home/LogoPart";
import PostPart from "../components/Home/PostPart";
import NoticePart from "../components/Home/NoticePart";
//이거 넣는법 까먹음 알아야됨

// 음식 버튼 부분 component화 시켜서 개선
//음식 버튼 색깔 이미지랑 다름

const StringScreen = [
  { screen: "KoreanList" },
  { screen: "WesternList" },
  { screen: "FlourList" },
  { screen: "JapaneseList" },
  { screen: "FastfoodList" },
  { screen: "AsianList" },
  { screen: "DessertList" },
];

const Home = () => {
  return (
    <Screen>
      <LogoPart />
      <Foodlist>
        <SearchbarPart />
        <ButtonPart />
      </Foodlist>
      <PostNotice>
        <PostPart />
        <NoticePart />
      </PostNotice>
      <WhiteSpace />
    </Screen>
  );
};

export default Home;

const WhiteSpace = styled.View`
  width: 100%;
  height: 5%;
`;

const Screen = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Foodlist = styled.View`
  width: 100%;
  height: 28%;
  background-color: #eff0f4;
`;

const PostNotice = styled.View`
  width: 100%;
  height: 53%;
  justify-content: center;
  align-items: center;
`;
