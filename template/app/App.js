// @flow
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import <%= pascal %> from '<%= name %>'

export default () => (
  <View style={styles.screen}>
    <Text style={styles.title}><%= pascal %></Text>
    <<%= pascal %> />
    <<%= pascal %> initialCount={45} />
    <Text style={styles.subtitle}>create-react-native-plugin</Text>
  </View>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 15,
  },
})
