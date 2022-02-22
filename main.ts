input.onButtonPressed(Button.AB, function () {
    if (8 * 4 == 2 * 16) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        basic.showString("1a2b3c4d5e6f7g8h9i10j")
    }
})
