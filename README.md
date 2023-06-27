## lbc-challenge01
# Requirements
- NodeJS(v16 >) Installed

# Installation

Install all depencies that is need in the project:

```bash
npm install
```

# Testing
To test the function run the following command:

```bash
npm run test
```
## Usage
To add more test case just change the param of function isABalancedString in the file index.spec.js

```javascript
const { isABalancedString } = require("./index")

test("should be able to analyze if the string is balanced", () => {
    expect(isABalancedString("()[]{}")).toBe(true)
    expect(isABalancedString("([{}")).toBe(false)
})
```
