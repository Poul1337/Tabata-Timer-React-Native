import {StyleSheet, Text, View, ViewStyle} from 'react-native';

type stylesProps = {
  view: ViewStyle;
  text: {
    fontSize: number;
  };
};

const styles: stylesProps = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

function App(): JSX.Element {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

export default App;
