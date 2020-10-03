module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  coverageDirectory: './.target/test/coverage/',
  coverageReporters: [
    'text',
    'lcov',
    'cobertura'
  ],
  reporters: [
    'default',
    ['jest-junit', {
      output: './.target/test/result.xml'
    }]
  ]
}