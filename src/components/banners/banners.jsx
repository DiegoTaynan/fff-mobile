import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style";

// Mapeamento das imagens locais no formato PNG
const imageMap = {
  "assets/banner1.png": require("../../assets/banner1.png"),
  "assets/banner2.png": require("../../assets/banner2.png"),
  "assets/banner3.png": require("../../assets/banner3.png"),
};

function Banners(props) {
  const getImageSource = (imagePath) => {
    return imageMap[imagePath] || null; // Retorna null se não encontrar a imagem
  };

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((banner, index) => {
          const bannerImage = getImageSource(banner.icons); // Pega a imagem mapeada
          return (
            <View key={index} style={styles.banners}>
              <TouchableOpacity>
                {bannerImage ? (
                  <Image style={styles.icone} source={bannerImage} />
                ) : (
                  <Text>Imagem não disponível</Text>
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Banners;
