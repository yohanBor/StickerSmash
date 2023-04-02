import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

import ImageViewer from './ImageViewer';
import Button from "./Button";
import PrimaryButton from "./PrimaryButton";

const PlaceholderImage = require("./assets/images/cat.jpg");

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const  pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" onPress={pickImageAsync} />
        <PrimaryButton label="Use this photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
