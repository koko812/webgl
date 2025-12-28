WIN_HEIGHT = 300
WIN_WIDTH = 300

const win = document.getElementById("win")
win.style.height = `${WIN_HEIGHT}px`
win.style.width = `${WIN_WIDTH}px`
win.style.border = "1px solid #000"
win.style.position = "absolute"
win.style.top = "100px"
win.style.left = "100px"
win.style.perspectiveOrigin = "50% 0%"
win.style.perspective = "200px"
win.style.transformStyle = "preserve-3d"

var rect = document.createElement('div')
var rect_x = 100
var rect_y = 100
var rect_height = 100
var rect_width = 100
rect.style.height = `${rect_height}px`
rect.style.width = `${rect_width}px`
rect.style.position = 'relative'
rect.style.top = `${rect_y}px`
rect.style.left = `${rect_x}px`
rect.style.border = "1px solid #000"

win.appendChild(rect)

rotate_deg = 1
rotate_speed = 2
function rotate(){
    rotate_deg += rotate_speed
    rect.style.transform = `rotateY(${rotate_deg}deg)`
    setTimeout(rotate, 15)
}

rotate()