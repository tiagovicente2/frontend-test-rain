import { Config } from 'jest'

const config: Config = {
  setupFilesAfterEnv: [
    './.jest/setup.ts',
  ],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
}

export default config
