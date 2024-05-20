import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Pdf from "react-native-pdf";

export default function DetailDoc() {
  //   const navigation = useNavigation();
  const [SelectFile, setSelectFile] = useState();
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

  return (
    <View style={styles.container}>
      {SelectFile && (
        <View>
          <Pdf
            source={{ uri: SelectFile.uri }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            style={styles.pdf}
          />
          {/* <Text>File path : {SelectFile.uri} </Text>
          <Text>Name File : {SelectFile.name} </Text>
          <Text>Size File : {SelectFile.size} </Text> */}
        </View>
      )}
      <View style={{ paddingBottom: 100 }}>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity style={styles.btn}>
            <Text>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pdfContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  btn: {
    backgroundColor: "#7C7CFC",
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
