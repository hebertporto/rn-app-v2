const rewire = require("rewire")
const SliderEntry_style = rewire("./SliderEntry.style")
const wp = SliderEntry_style.__get__("wp")
// @ponicode
describe("wp", () => {
    test("0", () => {
        let callFunction = () => {
            wp(300)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            wp(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            wp(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            wp(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            wp(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            wp(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
