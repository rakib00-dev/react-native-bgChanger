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
  const [rectRandomBackground, setRectRandomBackground] =
    React.useState('#ffffff');
  const [triangleRandomBackground, setTriangleRandomBackground] =
    React.useState('#ffffff');
  const [reactangleRandomBackground, setReactangleRandomBackground] =
    React.useState('#ffffff');
  const [circleRandomBackground, setCircleRandomBackground] =
    React.useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(colorHex);

    setCircleRandomBackground(colorHex);
  };

  const tringleColorFunc = () => {
    const hexRange = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += hexRange[Math.floor(Math.random() * 16)];
    }
    setTriangleRandomBackground(colorHex);
  };

  const rectColorFunc = () => {
    const hexRange = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += hexRange[Math.floor(Math.random() * 16)];
    }
    setRectRandomBackground(colorHex);
  };

  const circleColorFunc = () => {
    const hexRange = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += hexRange[Math.floor(Math.random() * 16)];
    }
    setCircleRandomBackground(colorHex);
  };

  const reactangleColorFunc = () => {
    const hexRange = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += hexRange[Math.floor(Math.random() * 16)];
    }
    setReactangleRandomBackground(colorHex);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={randomBackground} />
        <View style={[styles.container]}>
          <View
            style={[
              styles.circleShape,
              { backgroundColor: circleRandomBackground },
            ]}
          ></View>

          <View
            style={[
              styles.rectShape,
              { backgroundColor: rectRandomBackground },
            ]}
          ></View>

          <TouchableOpacity
            onPress={() => {
              generateColor();
              tringleColorFunc();
              rectColorFunc();
              circleColorFunc();
              reactangleColorFunc();
            }}
          >
            <View style={styles.actionBtn}>
              <Text
                style={[
                  styles.actionBtnTxt,
                  {
                    backgroundColor: randomBackground,
                    // color: triangleRandomBackground,
                  },
                ]}
              >
                Press Me
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.triangleShape,
              { backgroundColor: triangleRandomBackground },
            ]}
          ></View>
          <View
            style={[
              styles.rectangleShape,
              { backgroundColor: reactangleRandomBackground },
            ]}
          ></View>
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
    paddingVertical: 50,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  actionBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
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

  circleShape: {
    marginVertical: 5,
    justifyContent: 'center',
    margin: 'auto',
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    borderRadius: 30,
  },
  rectShape: {
    marginVertical: 5,
    justifyContent: 'center',
    margin: 'auto',
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
  },
  triangleShape: {
    marginVertical: 5,
    justifyContent: 'center',
    margin: 'auto',
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  rectangleShape: {
    marginVertical: 5,
    justifyContent: 'center',
    margin: 'auto',
    width: 100,
    height: 70,
    backgroundColor: 'yellow',
  },
});
