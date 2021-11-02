import Backend from "../backend/Backend"



test('Properly convert hex to rgb', () => {
    var rgb = new Backend().hexToRgb("#dddddd");
    var color = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"
    expect(color).toBe("rgb(221, 221, 221)")
})


test('Properly convert rgb to hex', () => {
    var hex = new Backend().rgbToHex("rgb(221, 221, 221)");
    expect(hex).toBe("#dddddd")
})
