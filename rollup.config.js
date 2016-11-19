//import json from 'rollup-plugin-json';
//import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import px2rem from 'postcss-px2rem'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const isProd = process.env.NODE_ENV === 'production'
const fileExt = isProd ? 'min.js' : 'js'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  sourceMap: true,
  dest: `lib/UiComponent.${fileExt}`,
  plugins: [
    postcss({
      plugins: [
        px2rem({remUnit: 16}),
        autoprefixer()
      ],
      extensions: ['.scss'],
    }),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
      plugins: [
        'add-module-exports',
        'transform-class-properties'
      ],
      presets: [
        [
          'es2015',
          {
            'modules': false
          }
        ],
        'react'
      ]
    }),
    (isProd && uglify())
  ]
}
