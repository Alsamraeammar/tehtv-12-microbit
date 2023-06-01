let pitch = 0
radio.setGroup(6)
led.setBrightness(25)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    radio.sendValue("name", pitch)
})
