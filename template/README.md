# <%= name %>

A plugin for React Native.

## Installation

```
bun install <%= name %>
```

## Usage

```jsx
import React from 'react'
import { Text } from 'react-native'
import { <%= pascal %> } from '<%= name %>'

export () =>
    <<%= pascal %>>
        <Text>Hello Plugin</Text>
    </<%= pascal %>>
```

## Development

### Tests

Tests configured for React Native can be run with `bun run test`.

### Preview App

To test your plugin on a device run the following to create a React Native app using it.

```
bun app
cd app
bun ios / bun android
```

The following command in the root will automatically copy over changes made to the plugin to the app.

```
bun copy
```
