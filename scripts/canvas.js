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


var gravity = 2
var balls = []

function make_ball_arrs(){
    for(let i = 0; i < 10; i++){
        //balls.push({x: 20 + i*50, y: 100+25*i, vx: 5, vy:0, r:20, color: `hsl(${i*20}, 80%, 80%)`})
        balls.push({x: 20 + i*50, y: 100, vx: 5, vy:0, r:20, color: `hsl(${i*20}, 80%, 80%)`})
    }
}

make_ball_arrs()

// 一瞬でボールを作れてしまった．．．天才かもしれない．．．
// ボールを作った後何をしようかというのが問題なんだよなあ．．．ゲームでも作りたいんだが？？
// ただ，いい感じのゲームのアイデアが思いつかないという悲しい話，いや模倣すればいいんだが．

function move(){
    for (const ball of balls) {
        if(ball.x - ball.r < 0 || ball.x+ ball.r > CAN_WIDTH){
            ball.vx *= -1
            ball.vx 
        }
        ball.x += ball.vx

        if(ball.y + ball.r > CAN_HEIGHT){
            ball.vy *= -1
            ball.y = CAN_HEIGHT-ball.r
        }
        ball.vy += gravity
        ball.y += ball.vy
    }
}

function draw(){
    for (const ball of balls) {
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.r , 0, 2*Math.PI)
        ctx.fillStyle = ball.color
        ctx.fill()
    }
}

function loop(){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, can.width, can.height)
    move()
    draw()
    console.log(balls)
    setTimeout(loop, 20);
}

loop()
