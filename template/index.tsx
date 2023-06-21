import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

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
  highlight: {
    borderColor: '#474747',
  },
  firstProgressLayer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    position: 'absolute',
    // Transparent borders not working on Android, use an almost transparent color.
    borderLeftColor: 'rgba(0, 0, 0, 0.01)',
    borderBottomColor: 'rgba(0, 0, 0, 0.01)',
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
    borderLeftColor: 'rgba(0, 0, 0, 0.01)',
    borderBottomColor: 'rgba(0, 0, 0, 0.01)',
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
    borderLeftColor: 'rgba(0, 0, 0, 0.01)',
    borderBottomColor: 'rgba(0, 0, 0, 0.01)',
    borderRightColor: 'black',
    borderTopColor: 'black',
    transform: [{ rotateZ: '-135deg' }],
  },
  highlightOffset: {
    borderRightColor: '#474747',
    borderTopColor: '#474747',
  },
  textOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
  textBold: {
    fontWeight: 'bold',
  },
})

const ThirdLayer = ({ percent, pressed }: { percent: number; pressed: boolean }) => {
  if (percent > 50) {
    return (
      <View
        key={percent + 99999}
        style={[styles.secondProgressLayer, rotation(percent - 50, 45)]}
      />
    )
  }

  return <View style={[styles.offsetLayer, pressed && styles.highlightOffset]} />
}

export type Props = {
  initialCount?: number
}

export const <%= pascal %> = ({ initialCount = 0 }: Props) => {
  const [count, setCount] = useState(initialCount)
  const percent = count % 100

  return (
    <View style={styles.view}>
      <Pressable onPress={() => setCount(count + 1)}>
        {({ pressed }) => (
          <View style={[styles.container, pressed && styles.highlight]}>
            <View key={percent} style={[styles.firstProgressLayer, rotation(percent, -135)]} />
            <ThirdLayer percent={percent} pressed={pressed} />
            <View pointerEvents="none" style={styles.textOverlay}>
              <Text style={[styles.text, pressed && styles.textBold]}>{count}</Text>
            </View>
          </View>
        )}
      </Pressable>
    </View>
  )
}
