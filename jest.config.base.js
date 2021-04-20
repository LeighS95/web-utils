module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/'
    ],
    coverageDirectory: '<rootDir>/coverage',
    verbose: true
}