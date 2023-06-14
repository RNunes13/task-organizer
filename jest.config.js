/* eslint-disable no-undef */
module.exports = {
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.tsx"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/e2e/", "/fixtures/"],
  testRegex: "/__(test|tests)__/.*\\.(test|spec)\\.tsx?$",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
    '^dexie$': require.resolve('dexie'),
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/*.{ts,tsx}",
    "!<rootDir>/src/**/*.styles.{ts,tsx}",
    "!**/*.d.ts",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/theme/*",
    "<rootDir>/src/app/*",
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 80,
      statements: 80,
    },
  },
  resetMocks: true,
};
