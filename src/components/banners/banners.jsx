import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Image, Text } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Modal } from "react-native";
import { styles } from "./banners.style";

function Banners(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const images = props.dados.map((banner) => ({
    url: banner.imagePath,
  }));

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((banner, index) => (
          <View key={banner.id_banner} style={styles.banners}>
            <TouchableOpacity onPress={() => openModal(index)}>
              <Image style={styles.icone} source={{ uri: banner.imagePath }} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <ImageViewer
          imageUrls={images}
          index={selectedIndex}
          enableSwipeDown={true}
          onSwipeDown={closeModal}
          onCancel={closeModal}
        />
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default Banners;
