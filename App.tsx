import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import ImageViewer from './ImageViewer';
import Button from "./Button";
import PrimaryButton from "./PrimaryButton";

const PlaceholderImage = require("./assets/images/cat.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a pshoto" />
        <PrimaryButton label="Use this photo test" />
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
