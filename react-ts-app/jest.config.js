module.exports={
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^axios$': require.resolve('axios'),
    },
    silent: true,
};