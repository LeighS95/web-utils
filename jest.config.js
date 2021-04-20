const baseConfig = require('./jest.config.base');

module.exports = {
    ...baseConfig,
    roots: ['<rootDir>'],
    projects: ['<rootDir>/packages/utils/**/jest.config.js']
}