import React from "react";
import { View, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

const image = require('../../../assets/drawer-bg.jpeg');

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          style={{color: 'white'}}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="ACTE UTILE"
          source={require("../../../assets/icons/envelope.png")}
          onPress={() => {
            navigation.navigate("HandyLinks");
            navigation.closeDrawer();
          }}
        />
      </View>
      <View style={styles.container2}>
        <MenuButton
          title="AJUTOR?"
          source={require("../../../assets/icons/home.png")}
          style={{color: 'white'}}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
      </View>
      </ImageBackground>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
