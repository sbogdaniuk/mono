module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
    '^@typings(.*)$': '<rootDir>/typings/index.d.ts',
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@features(.*)$': '<rootDir>/src/features/$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks/$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers/$1',
    '^@definitions(.*)$': '<rootDir>/src/definitions/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@services(.*)$': '<rootDir>/src/services/$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@styles(.*)$': '<rootDir>/src/assets/styles/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/blankMock.ts',
    '\\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks/imageMock.ts',
    '^@images(.*)$': '<rootDir>/src/assets/images/$1',
  },
  setupFiles: ['./test/setup.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*",
    "!src/**/*.d.ts",
    "!src/components/**/index.ts",
  ],
};
