module.exports = {
    testEnvironment: "node",
    name: "server-test",
    rootDir: "../../",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/jestSetup/"
    ],
    watchPathIgnorePatterns: ['globalConfig'],
    collectCoverageFrom: ["<rootDir>/src/server/**/*.js", "!<rootDir>/src/server/app.js", "!<rootDir>/src/server/index.js"],
    testMatch: ["**/server/**/*.test.*"],
    preset: "@shelf/jest-mongodb"
}