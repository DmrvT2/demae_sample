/**
 * ★「servo」とは車輪を動かす「サーボーモーター」のことだよ。
 * 
 * ▼モーターの種類
 * 
 * 「P0」：左側のモーター（進む方向に対して）
 * 
 * 「P1」：右側のモーター（〃）
 * 
 * ▼設定について
 * 
 * 「回転速度」でスピードを設定するよ
 * 
 * 　　※右側のモーターはマイナスで設定してね
 * 
 * 「一時停止（ミリ秒）」でモーターを動かす時間を設定するよ
 * 
 * ▼ブロックメニューの追加方法
 * 
 * ブロックメニューの「拡張機能」を押して「Servo」を追加してね
 * 
 * このサンプルと違うモーターの動かし方もできるよ
 */
/**
 * ▼ここから下は、時間が余ったら触ってみてね
 */
function 直進２秒 () {
    servos.P0.run(50)
    servos.P1.run(-50)
    basic.pause(2000)
}
/**
 * ◆部品をまとめた部品も作ることができるよ
 */
function 右折セット () {
    右折()
    直進２秒()
    左折()
}
function 右折 () {
    servos.P0.run(70)
    servos.P1.run(0)
    basic.pause(1000)
}
function 左折セット () {
    左折()
    直進２秒()
    右折()
}
function 直進３秒 () {
    servos.P0.run(50)
    servos.P1.run(-50)
    basic.pause(3000)
}
/**
 * ▼走行ルート
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    _1マス進む()
    右折()
    _1マス進む()
    左折()
    _1マス進む()
    左折()
    _1マス進む()
    右折()
    _1マス進む()
    servos.P0.stop()
    servos.P1.stop()
    basic.showIcon(IconNames.Yes)
})
function 直進１秒 () {
    servos.P0.run(50)
    servos.P1.run(-50)
    basic.pause(1000)
}
/**
 * ▼走り方。それぞれの細かい動きを調整してね
 */
function _1マス進む () {
    servos.P0.run(50)
    servos.P1.run(-50)
    basic.pause(1000)
}
/**
 * ◆モーターを停止するよ
 */
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.showIcon(IconNames.No)
    while (true) {
        servos.P0.stop()
        servos.P1.stop()
    }
})
function 左折 () {
    servos.P0.run(0)
    servos.P1.run(-70)
    basic.pause(1000)
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
