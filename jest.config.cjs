module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/src/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['lcov', 'text-summary'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
