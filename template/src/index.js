// @flow
import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ThirdLayer = ({ percent }) => {
    if (percent > 50) {
      return (
        <View
          key={percent + 99999}
          style={[styles.secondProgressLayer, rotation(percent - 50, 45)]}
        />
      )
    }

    return <View style={styles.offsetLayer} />
}

export type Props = {
  initialCount: number,
}

export const <%= pascal %> = ({ initialCount = 0 }: Props) => {
  const [count, setCount] = useState(initialCount)
  const percent = count % 100

    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <View style={styles.container}>
            <View
              key={percent}
              style={[styles.firstProgressLayer, rotation(percent, -135)]}
            />
            <ThirdLayer percent={percent} />
            <View pointerEvents="none" style={styles.textOverlay}>
              <Text style={styles.text}>{count}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const rotation = (percent: number, base: number) => ({
  transform: [{ rotateZ: `${base + (percent > 50 ? 50 : percent) * 3.6}deg` }],
})

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'gray',
    borderTopColor: 'gray',
    transform: [{ rotateZ: '-135deg' }],
  },
  secondProgressLayer: {
    width: 200,
    height: 200,
    position: 'absolute',
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'gray',
    borderTopColor: 'gray',
    transform: [{ rotateZ: '45deg' }],
  },
  offsetLayer: {
    width: 200,
    height: 200,
    position: 'absolute',
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'black',
    borderTopColor: 'black',
    transform: [{ rotateZ: '-135deg' }],
  },
  textOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
})
