import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Friends extends React.Component {
  render() {
    const { navigation, screenProps } = this.props;
    return (
      <View style={styles.container}>
        <Text> Add friends here! </Text>
        {
          screenProps.possibleFriends.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                screenProps.addFriend(index)
              }
            />
          ))
        }
        <Button
          title="Back to home"
          onPress={() =>
            navigation.navigate('Home')
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
