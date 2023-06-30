module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          consts: './src/consts/',
          components: './src/components/',
          navigators: './src/navigators/',
          screens: './src/screens/',
          types: './src/types/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
