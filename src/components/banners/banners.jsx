import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style";

function Banners(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((banner) => (
          <View key={banner.id_banner} style={styles.banners}>
            <TouchableOpacity>
              {/* Use banner.imagePath */}
              <Image style={styles.icone} source={{ uri: banner.imagePath }} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Banners;
