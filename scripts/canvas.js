CAN_HEIGHT = 500
CAN_WIDTH = 500

/** * @type {HTMLCanvasElement} */
const can = document.getElementById("can")
can.width = CAN_WIDTH
can.height = CAN_HEIGHT

/** * @type {CanvasRenderingContext2D} */
const ctx = can.getContext("2d")
ctx.fillStyle = "black"
ctx.fillRect(0, 0, can.width, can.height)

// レーシングゲームの再現をもう一回してみたら，何かが見えてくるんだろうか．
// とにかく，作りっぱなしになってるゲームが多いというか，作ってからだいぶと時間が経ったので，
// 忘れてしまったという話になってしまった．
// 今いきなり webGL を作ったとしても一瞬で忘れてしまうかもしれん？？

var ballX = 100
var balldX = 5
var ballY = 100
var balldY = 0
var ballddY = 2
var ballRadius = 20

// 一瞬でボールを作れてしまった．．．天才かもしれない．．．
function loop(){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, can.width, can.height)
    if(ballX - ballRadius < 0 || ballX+ ballRadius > CAN_WIDTH){
        balldX *= -1
    }
    ballX += balldX
    if(ballY + ballRadius > CAN_HEIGHT){
        balldY *= -1
        ballY = CAN_HEIGHT-ballRadius
    }
    balldY += ballddY
    ballY += balldY
    ctx.beginPath()
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI)
    ctx.fillStyle = "red"
    ctx.fill()
    setTimeout(loop, 20);
}

loop()
