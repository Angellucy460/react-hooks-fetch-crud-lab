module.exports = {
  testEnvironment: "jsdom", // or "node", depending on your project
  roots: ["<rootDir>/src"], // or wherever your test files are
  testMatch: ["**/*.test.js", "**/*.spec.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // if you're using Babel
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
