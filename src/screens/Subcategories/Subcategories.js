import React, { useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { subcategories } from "../../data/subcategoriesArray";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function SubcategoriesScreen(props) {
    const { navigation, route } = props;
    const [categoryIdx, setCategoryIdx] = useState(0);


    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            flex: 1,
          },
          headerLeft: () => (
            <MenuImage
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => <View />,
        });
      }, []);
    
      const onPressSubCategory = (item) => {
        setCategoryIdx(item);
        const title = item.name;
        const subCategory = item;
        console.log("[2]=====================================");
        console.log("RecipesList", { subCategory, title });
        console.log("[2]=====================================");
        navigation.navigate("RecipesList", {category: subCategory, title: title });
      };
    
      const renderSubCategory = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressSubCategory(item)}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
            <Text style={styles.categoriesName}>{item.name}</Text>
            <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item)} recipes</Text>
          </View>
        </TouchableHighlight>
      );
    
      return (
        <View>
          <FlatList data={subcategories[categoryIdx]} renderItem={renderSubCategory} keyExtractor={(item) => `${item.id}`} />
        </View>
      );
}
