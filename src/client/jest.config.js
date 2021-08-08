module.exports = {
    testEnvironment: "jsdom",
    name: "client-test",
    rootDir: "../../",
    setupFilesAfterEnv: ["<rootDir>/jestSetup/setuptests.js"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/jestSetup/"
    ],
    collectCoverageFrom: ["<rootDir>/src/client/**/*.{js,jsx}", "!<rootDir>/src/client/app.js", "!<rootDir>/src/client/store.js", "!<rootDir>/src/client/routes.js"],
    testMatch: ["**/client/**/*.test.*"],
    moduleNameMapper: {
        "\\.(s?css|less)$": "<rootDir>/jestSetup/ignoreFileType.js",
        "\\.(gif|tff|eot|svg)$": "<rootDir>/jestSetup/fileMock.js"
    },
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    preset: "@shelf/jest-mongodb"
}
