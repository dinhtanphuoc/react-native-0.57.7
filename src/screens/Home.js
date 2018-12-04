import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    const { navigation, screenProps } = this.props;
    return (
      <View style={styles.container}>
        <Text> We have { screenProps.currentFriends.length } friends!</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
