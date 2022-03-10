import React from 'react';
import {Button, Appbar, Card, Title, Paragraph} from 'react-native-paper';
import {
  View,
  FlatList,
  Linking,
  Alert,
} from 'react-native';
import courses from './data/courses.json';
import appStyles from './styles/app-styles';

const App = () => {
  const handlePress = async url => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View>
      <Appbar>
        <Appbar.Content title="Courses" />
      </Appbar>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <Card style={appStyles.card}>
            <Card.Cover source={{uri: item.image}} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handlePress(item.link)}>
                View Course
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
};

export default App;
