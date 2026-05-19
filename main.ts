radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (signal >= -80) {
        receivedIndex = Math.constrain(receivedNumber - 1, 0, 8)
        if (!(list[receivedIndex])) {
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            list[receivedIndex] = true
        } else {
            music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
    }
    for (let index = 0; index <= list.length - 1; index++) {
        if (list[index]) {
            x = index * 2 % 6
            y = Math.idiv(index * 2, 6) * 2
            led.plot(x, y)
        }
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    if (music.volume() < 10) {
        music.setVolume(50)
    } else {
        music.setVolume(0)
    }
})
let y = 0
let x = 0
let receivedIndex = 0
let signal = 0
let list: boolean[] = []
music.setVolume(50)
music.setTempo(180)
radio.setGroup(1)
list = []
for (let index = 0; index < 9; index++) {
    list.push(false)
}
music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
