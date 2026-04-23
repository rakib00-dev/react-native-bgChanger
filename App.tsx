import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function App() {
  const [randomBackground, setRandomBackground] = React.useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackground(colorHex);
  };
  return (
    <>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={[styles.container]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  actionBtn: {},
  actionBtnTxt: {},
});
