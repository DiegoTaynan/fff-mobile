import React from "react";
import { Modal, TouchableOpacity, Text } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { styles } from "./imageViewer.style.js";

function CustomImageViewer({ images, onClose }) {
  const formattedImages = images.map((image) => ({ url: image }));

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <ImageViewer
        imageUrls={formattedImages}
        enableSwipeDown={true}
        onSwipeDown={onClose}
        onCancel={onClose}
      />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>
    </Modal>
  );
}

export default CustomImageViewer;
