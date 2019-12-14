# <%= name %>

A plugin for React Native.

## Installation

```
npm i <%= name %>
```

## Usage

```jsx
import React from 'react'
import { Text } from 'react-native'
import <%= pascal %> from '<%= name %>'

export () =>
    <<%= pascal %>>
        <Text>Hello Plugin</Text>
    </<%= pascal %>>
```

## Development

### Tests

Tests configured for React Native can be run as follows

```
npm test
```

### Preview App

To test your plugin on a device run the following to create a React Native app using it.

```
npm install
npm run app --silent
cd app
react-native run-ios / react-native run-android
```

The following command will automatically copy over changes made to the plugin to the app.

```
npm run watch
```
