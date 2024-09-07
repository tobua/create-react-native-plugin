# create-react-native-plugin

<img align="right" src="https://github.com/tobua/create-react-native-plugin/raw/main/logo.png" width="20%" alt="Create React Native Plugin" />

Starting point for creating React Native plugins in TypeScript without native code.

- Publish plugin as TypeScript with Bun
- Setup demo app with plugin installed
- Copy plugin changes over to demo app
- Jest, ESLint and Prettier configured

## Usage

```
bun create react-native-plugin react-native-my-plugin
bunx create-react-native-plugin@latest react-native-my-plugin
```

This will bootstrap a new plugin inside a folder named `react-native-my-plugin` accordingly. Inside that folder the commands mentioned hereafter are available. The prefix `react-native-` is optional and will be removed where the React Native context is implied.

Start working on your plugin by editing `index.tsx` which will be the entry point for the plugin.

## App

Since you probably don't want to blind-code the whole plugin use the following command to generate an up-to-date React Native app which includes the plugin:

```
bun app
```

This will create an app inside `/app` where except `/app/App.tsx` all files are gitignored. Here you can try out various use cases of the plugin and use this as a way to demonstrate the plugin. The app can be started as usual by running `bun ios` or `bun android` inside the `/app` folder.

```
bun copy
```

Running the above in the root folder will watch the plugin source code for any kind of changes and copy over the changes to the app which will then automatically hot-reload.

Don't forget to always check your plugin both on Android and iOS even though your not using native code the provided components might still differ depending on the platform.

## Tests

The template is configured to work with Jest out of the box. All non-native functionality can be tested from the terminal. With the following command you can run the tests which are found in a folder with the same name:

```
bun run test
```

## Troubleshooting

If you have issues building the app for iOS try the following

- Update XCode in the App Store (installation takes time)
- Update Cocoapods with `sudo gem install cocoapods`
- Update Pod dependencies in `app/ios` folder with `pod update`

## Examples

The following plugins have been created with create-react-native-plugin as a starting point.

- [Reactigation](https://github.com/tobua/reactigation)
  JS-only navigation for React Native.
- [React Native Cols](https://github.com/tobua/react-native-cols)
  Grid for React Native.
- [React Native Indicate](https://github.com/tobua/react-native-indicate)
  Scroll indicator for views with overflow.
- [Naxos](https://github.com/tobua/naxos)
  UI Library.
- [Responsive React Native](https://github.com/tobua/responsive-react-native)
  Automatically transforms StyleSheet values responsively.

<p align="center">
  <img src="https://github.com/tobua/create-react-native-plugin/raw/main/app.png" alt="Plugin running in Preview App" width="250">
</p>
