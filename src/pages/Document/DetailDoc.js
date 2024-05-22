import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  Touchable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Feather,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Pdf from "react-native-pdf";
import Draggable from "react-native-draggable";
import { primaryColor, secondaryColor } from "../../components/Color";

const Materai = require("../../assets/e-Materai.png");

export default function DetailDoc({ navigation }) {
  //   const navigation = useNavigation();
  const [SelectFile, setSelectFile] = useState();
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [MateraiImages, setMateraiImages] = useState(null);

  const getFile = async () => {
    const files = await AsyncStorage.getItem("document");
    if (files) {
      const parseFiles = JSON.parse(files);
      setSelectFile(parseFiles);
    } else {
      console.log("File document doesn't exists");
    }
  };

  useEffect(() => {
    getFile();
  }, []);

  const goToNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(0));

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };

  useEffect(() => {
    if (isModalVisible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(0);
    }
  }, [isModalVisible]);

  const addMaterai = () => {
    if (!MateraiImages) {
      setMateraiImages(Materai);
    }
  };

  const removeImage = () => {
    if (MateraiImages) {
      setMateraiImages(null);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 16,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          height: 50,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Navigate")}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text></Text>
        <View>
          <Text>Lanjutkan</Text>
        </View>
      </View>
      {SelectFile && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Pdf
            source={{ uri: SelectFile.uri }}
            onLoadComplete={(numberOfPages, filePath) => {
              setNumberOfPages(numberOfPages);
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              setCurrentPage(page);
              console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            page={currentPage}
            scale={1.0}
            enableDoubleTapZoom={true}
            style={styles.pdf}
          />
        </ScrollView>
      )}
      {MateraiImages && (
        <Draggable
          imageSource={Materai}
          renderSize={50}
          x={0}
          y={0}
          z={1}
          onDragRelease={() => console.log("Image dragged")}
          onLongPress={() => console.log("log press")}
          onShortPressRelease={() => console.log("press drag")}
          onPressIn={() => console.log("in press")}
          onPressOut={() => console.log("out press")}
        />
      )}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 392,
          height: 150,
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderColor: "#757575",
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="zoom-in" size={20} color="black" />
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
                borderColor: "#757575",
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="zoom-out" size={20} color="black" />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 50,
                height: 30,
                borderColor: "#757575",
                borderWidth: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{currentPage}</Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>/{numberOfPages}</Text>
            </View>
          </View>
          {/* Modal */}
          <Modal transparent={true} visible={isModalVisible}>
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.modalOverlay}>
                <Animated.View
                  style={[
                    styles.modalContent,
                    {
                      transform: [
                        {
                          translateY: slideAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [300, 0],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      elevation: 1,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>Pilih Token</Text>
                      <TouchableWithoutFeedback onPress={closeModal}>
                        <AntDesign name="closesquare" size={24} color="grey" />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 16,
                      marginTop: 20,
                      alignItems: "center",
                    }}
                  >
                    <TouchableWithoutFeedback onPress={addMaterai}>
                      <View style={styles.cardToken}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <MaterialCommunityIcons
                            name="postage-stamp"
                            size={50}
                            color="orange"
                            style={styles.stampIcon}
                          />
                          <View>
                            <Text style={{ fontSize: 18, fontWeight: 800 }}>
                              e-Materai
                            </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: 300,
                                opacity: 0.6,
                              }}
                            >
                              Materai elektronik yang sah dari PERURI
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={goToPreviousPage}
              style={{
                width: 30,
                height: 30,
                borderColor: "#757575",
                borderWidth: 1,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="arrow-back-ios" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToNextPage}
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
                borderColor: "#757575",
                borderWidth: 1,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={removeImage}
            style={{
              width: 50,
              height: 50,
              backgroundColor: primaryColor,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <FontAwesome5 name="trash" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openModal}
            style={{
              width: 50,
              height: 50,
              backgroundColor: primaryColor,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <MaterialIcons name="mode-edit" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  pdf: {
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 390,
    height: 550,
    position: "absolute",
    bottom: 0,
    // borderTopRightRadius: 15,
    // borderTopLeftRadius: 15,
  },
  barMenu: {
    width: "auto",
    marginHorizontal: 20,
    height: 60,
    borderBottomWidth: 1,
    justifyContent: "center",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  barMenuBottom: {
    width: "auto",
    marginHorizontal: 20,
    height: 60,
    justifyContent: "center",
  },
  cardToken: {
    width: 360,
    height: 90,
    // paddingVertical: 30,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  stampIcon: {
    marginRight: 30,
  },
});
