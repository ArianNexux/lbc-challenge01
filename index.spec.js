const { isABalancedString } = require("./index")

test("should be able to analyze if the string is balanced", () => {
    expect(isABalancedString("()[]{}")).toBe(true)
    expect(isABalancedString("([{}")).toBe(false)
    expect(isABalancedString("2+(3*5)-[(3-4)*1]")).toBe(true)
})