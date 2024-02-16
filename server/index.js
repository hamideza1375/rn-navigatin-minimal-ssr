require('ignore-styles')

require('@babel/register')({
  presets: ['module:metro-react-native-babel-preset'],
})

require('./server')

