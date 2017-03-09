module.exports = {
  browserSync: {
    enabled: true,
    port: 3050,
    watchFiles: [],
    baseDir: 'build/',
    startPath: '/',
    openBrowserAtStart: true,
    // requires above to be true; allows non-default browser to open
    browser: [
      'Google Chrome',
    ],
    reloadDelay: 50,
    reloadDebounce: 750,
  },
  css: {
    enabled: true,
    source: [
      'src/scss/styles.scss',
      'src/canvas/css/**/*.scss',
    ],
    includePaths: [
      'src/canvas/css/**/*.scss',
    ],
    dest: 'build/css/',
    lint: true,
    // outputStyles maybe 'expanded', 'compressed', 'nested'
    outputStyle: 'expanded',
    sourceMap: false,
    sourceComments: false,
    autoPrefixerBrowsers: [
      'last 2 versions',
      'IE >= 10',
    ],
    flattenOutput: true,
    sassdoc: {
      enabled: false,
      dest: 'sassdoc',
      verbose: false,
      exclude: [],
    },
  },
  js: {
    enabled: true,
    source: 'src/js/*.js',
    dest: 'build/js/',
    destFileName: 'scripts.js',
    babel: false,
    uglify: false,
    sourceMap: false,
    includePaths: [
      'src/canvas/js/jquery.js',
      'src/canvas/js/jquery.gmap.js',
      'src/canvas/js/lodash.js',
      'src/canvas/js/plugins.js',
      'src/canvas/js/functions.js',
    ],
    eslint: {
      enabled: true,
      sources: [
        'src/js/**/*.js',
      ],
    },
    documentationJs: {
      enabled: true,
      sources: [
        'src/js/**/*.js',
      ],
      dest: 'jsdoc',
      // Either 'html', 'md', or 'json'
      format: 'html',
    },
  },
  html: {
    enabled: true,
    sources: [
      'src/index.html',
    ],
    dest: 'build/',
    lint: true,
    twig: {
      enabled: true,
      baseDir: 'src/templates'
    },
  },
  assets: {
    pipelines: [
      {
        source: 'src/',
        dest: '',
      }
    ],
  }
};