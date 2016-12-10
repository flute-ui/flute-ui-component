import babel from 'rollup-plugin-babel'
import px2rem from 'postcss-px2rem'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const isProd = process.env.NODE_ENV === 'production'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  sourceMap: true,
  dest: `lib/index.js`,
  plugins: [
    postcss({
      plugins: [
        px2rem({remUnit: 16}),
        autoprefixer()
      ],
      extensions: ['.css'],
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
    })
  ]
}
