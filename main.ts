input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        basic.showNumber(time)
        time += -1
        basic.pause(1000)
    }
    soundExpression.happy.playUntilDone()
    while (time == 0) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        time = 0
        music.stopAllSounds()
    }
})
let time = 0
time = 10
basic.forever(function () {
	
})
