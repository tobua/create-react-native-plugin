# create-react-native-plugin

<img align="right" src="https://github.com/tobua/create-react-native-plugin/raw/master/logo.png" width="20%" alt="Create React Native Plugin" />

Starting point for creating React Native plugins without native code.

- Setup demo app with plugin
- Watch plugin source for changes

## Usage

```
npm init react-native-plugin react-native-my-plugin
# or
npx create-react-native-plugin react-native-my-plugin
```

This will bootstrap a new plugin inside a folder named `react-native-my-plugin` accordingly. Inside that folder the commands mentioned hereafter are available. The prefix `react-native-` is optional and will be removed where the React Native context is implied.

Start working on your plugin by editing `src/index.js` which will be the entry point for the plugin.

## App

Since you probably don't want to blind-code the whole plugin use the following command to generate an up-to-date React Native app which includes the plugin:

```
npm run app
```

This will create an app inside `/app` where except `/app/App.js` all files are gitignored. Here you can try out various use cases of the plugin and use this as a way to demonstrate the plugin.

```
npm run watch
```

Running the above will watch the plugin `/src/` folder for any kind of changes and copy them over to the app which will then automatically hot-reload.

Don't forget to always check your plugin both on Android and iOS even though your not using native code the provided components might still differ depending on the platform.

## Tests

The template is configured to work with Jest out of the box. All non-native functionality can be tested from the terminal. With the following command you can run the tests which are found in a folder with the same name:

```
npm test
```

## Types

Since React Native will usually run in a modern JavaScript engine there is no need to transpile your source code and apps can directly use the plugin source code. The Flow type checker is the default type system for react native and the source code is writting in flow. While TypeScript is the more popular type checker overall flow is more popular in the React Native ecosystem and can be used out of the box. Therefore this package will only support flow.

## Troubleshooting

If you have issues building the app for iOS try the following

- Update XCode in the App Store (installation takes time)
- Update Cocoapods with `sudo gem install cocoapods`
- Update Pod dependencies in `app/ios` folder with `pod update`

## Examples

The following plugins have been created with create-react-native-plugin as a starting point.

- [React Native Indicate](https://github.com/naminho/indicate/tree/master/plugins/react-native)
  Scroll indicator for views with overflow.
- [Reactigation](https://github.com/naminho/reactigation)
  JS-only navigation for React Native.
- [React Native Cols](https://github.com/naminho/react-native-cols)
  Grid for React Native.
