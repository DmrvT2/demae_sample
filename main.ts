/**
 * ★「servo」とは車輪を動かす「サーボーモーター」です
 * 
 * ▼モーターの種類
 * 
 * 「P0」：左側のモーター（進む方向に対して）
 * 
 * 「P1」：右側のモーター（〃）
 * 
 * ▼設定について
 * 
 * 「回転速度」でスピードを設定します
 * 
 * 　　※右側のモーターはマイナスで設定してね
 * 
 * 「一時停止（ミリ秒）」でモーターを動かす時間を設定します
 */
/**
 * ▼ここから下は、時間が余ったら触ってみてね
 */
/**
 * ◆部品をまとめた部品も作ることができるよ
 */
function 右折セット () {
    右折()
    左折()
}
function 右折 () {
    servos.P0.run(75)
    servos.P1.run(0)
    basic.pause(825)
}
function 左折セット () {
    左折()
    右折()
}
/**
 * ▼走行ルート
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    _1マス進む()
    _1マス進む()
    左折()
    _1マス進む()
    右折()
    _1マス進む()
    右折()
    _1マス進む()
    左折()
    _1マス進む()
    servos.P0.stop()
    servos.P1.stop()
    basic.showIcon(IconNames.Yes)
})
/**
 * ◆モーターを停止するよ
 */
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    while (true) {
        servos.P0.stop()
        servos.P1.stop()
        basic.showIcon(IconNames.No)
    }
})
/**
 * ▼走り方（動き）。それぞれの細かい動きを調整してね
 */
function _1マス進む () {
    servos.P0.run(52)
    servos.P1.run(-50)
    basic.pause(1200)
}
function 左折 () {
    servos.P0.run(0)
    servos.P1.run(-75)
    basic.pause(825)
}
/**
 * ◆音が鳴るよ
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
/**
 * ◆最初だけ、LEDにアイコンを表示するよ
 */
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.showIcon(IconNames.Happy)
