// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import renderer from 'react-test-renderer'
import <%= pascal %> from '<%= name %>'

test('Renders without any options.', () => {
  const rendered = renderer.create(<<%= pascal %> />)
  const tree = rendered.toJSON()

  expect(tree.type).toEqual('View')
})

test('Renders inside a View with initialCount prop.', () => {
  const styles = StyleSheet.create({
    color: {
      color: 'red',
    },
  })

  const rendered = renderer.create(
    <View style={styles.color}>
      <<%= pascal %> initialCount={45} />
    </View>
  )
  const tree = rendered.toJSON()

  expect(tree.props.style.color).toEqual('red')
})
