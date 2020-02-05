import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import normalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import injectEnv from 'rollup-plugin-inject-env';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife'
  },
  plugins: [
    isDevelopment && browsersync({ server: 'public' }),
    isProduction && terser(),
    postcss({
      plugins: [normalize(), autoprefixer(), cssnano()],
      extract: true
    }),
    babel(),
    resolve(),
    commonjs(),
    isProduction && filesize(),
    injectEnv()
  ]
};
