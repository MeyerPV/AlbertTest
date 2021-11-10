module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Assets: './src/Assets',
          Components: './src/Components',
          Config: './src/Config',
          Module: './src/Module',
          Navigation: './src/Navigation',
          Screens: './src/Screens',
          Services: './src/Services',
          Store: './src/Store',
          Types: './src/Types',
          Utils: './src/Utils',
        },
        extensions: ['.js', '.jsx', '.json'],
      },
    ],
  ],
};
