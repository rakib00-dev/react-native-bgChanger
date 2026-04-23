import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={randomBackground} />
        <View style={[styles.container]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBarBody: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  actionBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 350,
  },
  actionBtnTxt: {
    color: 'Black',
    borderColor: 'black',
    borderWidth: 4,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    fontSize: 28,
  },
});
