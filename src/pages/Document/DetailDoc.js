import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Pdf from "react-native-pdf";

export default function DetailDoc({ route }) {
  const [selectedDoc, setSelectedDoc] = useState();

  const getDocument = async () => {
    const document = await AsyncStorage.getItem("document");
    if (document) {
      const parsedDocument = JSON.parse(document);
      setSelectedDoc(parsedDocument);
    } else {
      console.log("Dokumen tidak ditemukan");
    }
  };

  useEffect(() => {
    getDocument();
  });

  return (
    <View style={styles.container}>
      {selectedDoc && (
        <View>
          <Text>Detail :</Text>
          <Text>File: {selectedDoc.uri}</Text>
          <Text>Nama: {selectedDoc.name}</Text>
          <Text>Ukuran: {selectedDoc.size} bytes</Text>
        </View>
      )}

      <Pdf
        trustAllCerts={false}
        source={selectedDoc.uri}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
