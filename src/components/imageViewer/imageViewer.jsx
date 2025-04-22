import React, { useState, useEffect } from "react";
import { Modal, View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./imageViewer.style.js";

function ImageViewer({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Imagens recebidas:", images); // Log para verificar as imagens recebidas
  }, [images]);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        {images.length > 0 ? (
          <>
            <Image
              source={{ uri: images[currentIndex] }}
              style={styles.image}
              onError={(error) =>
                console.error(
                  "Erro ao carregar imagem:",
                  error.nativeEvent.error
                )
              }
            />
            <View style={styles.navigation}>
              <TouchableOpacity
                onPress={handlePrevious}
                disabled={currentIndex === 0}
              >
                <Text style={styles.navText}>{"<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNext}
                disabled={currentIndex === images.length - 1}
              >
                <Text style={styles.navText}>{">"}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text style={styles.noImageText}>Nenhuma imagem disponível</Text>
        )}
      </View>
    </Modal>
  );
}

export default ImageViewer;
