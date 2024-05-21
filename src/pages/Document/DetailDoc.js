import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, AntDesign, EvilIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import Pdf from "react-native-pdf";
import { primaryColor, secondaryColor } from "../../components/Color";

export default function DetailDoc({ navigation }) {
  //   const navigation = useNavigation();
  const [SelectFile, setSelectFile] = useState();
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <View style={styles.container}>
        <View style={{paddingHorizontal:16, alignItems:'center', justifyContent:"space-between", flexDirection:"row", height:50, backgroundColor:"#fff"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Navigate')}>
              <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text></Text>
          <View>
            <Text>Lanjutkan</Text>
          </View>
        </View>
      {SelectFile && (
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pdfContainer}
        >
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
            enablePaging={true}
            style={styles.pdf}
          />
          {/* <Text>File path : {SelectFile.uri} </Text>
          <Text>Name File : {SelectFile.name} </Text>
          <Text>Size File : {SelectFile.size} </Text> */}
        </ScrollView>
      )}
      <View style={{position:"absolute", bottom:0, backgroundColor:"#fff", width:'100%', maxWidth:392, height:150, paddingHorizontal:16, paddingVertical:20}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:30, height:30, borderColor:"#757575", borderWidth:1, borderRadius:5, alignItems:"center", justifyContent:"center"}}>
              <Feather name="zoom-in" size={20} color="black" />
            </View>
            <View style={{width:30, height:30, marginLeft:15, borderColor:"#757575", borderWidth:1, borderRadius:5, alignItems:"center", justifyContent:"center"}}>
              <Feather name="zoom-out" size={20} color="black" />
            </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <View style={{width:50, height:30, borderColor:"#757575", borderWidth:1, borderRadius:5, alignItems:"center", justifyContent:"center"}}>
              <Text>{currentPage}</Text>
            </View>
            <View style={{marginLeft:15 ,alignItems:"center", justifyContent:"center"}}>
              <Text>/{numberOfPages}</Text>
            </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={goToPreviousPage} style={{width:30, height:30, borderColor:"#757575", borderWidth:1, borderRadius:50, justifyContent:"center", alignItems:"center"}}>
              <MaterialIcons name="arrow-back-ios" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNextPage} style={{width:30, height:30, marginLeft:15, borderColor:"#757575", borderWidth:1, borderRadius:50, alignItems:"center", justifyContent:"center"}}>
              <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:20, marginLeft:"auto"}}>
          <View style={{width:50, height:50, backgroundColor:primaryColor, alignItems:"center", justifyContent:"center", borderRadius:50}}>
            <MaterialIcons name="mode-edit" size={18} color="white" />
          </View>
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
  pdfContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  pdf: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
