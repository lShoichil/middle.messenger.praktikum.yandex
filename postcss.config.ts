const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

export default {
  plugins: [
    postcssPresetEnv(),
    autoprefixer(),
  ],
};
