module.exports = {
    transform: {
        '^.+\\.ts$' : 'ts-jest'
    },
    moduleFileExtensions : [
        'js',
        'ts'
    ],
    testMatch: [
        '**/tests/**/*.test.(ts|js)'
    ],
    testEnvironment: 'node'
};