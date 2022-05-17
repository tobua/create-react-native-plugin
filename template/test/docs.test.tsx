import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { <%= pascal %> } from '<%= name %>'

test('README example renders correctly.', () => {
  const tree = renderer.create(
    <View>
      <<%= pascal %> />
    </View>
  )

  expect(tree).toBeDefined()
})
