const standard = require('@grafana/toolkit/src/config/jest.plugin.config');

module.exports = {
  ...{
    ...standard.jestConfig(),
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    modulePathIgnorePatterns: ['<rootDir>/src/types.ts', '<rootDir>/src/module.ts'],
  },
};
