WIN_HEIGHT = 300
WIN_WIDTH = 300

const win = document.getElementById("win")
win.style.height = `${WIN_HEIGHT}px`
win.style.width = `${WIN_WIDTH}px`
win.style.border = "1px solid #000"
win.style.position = "absolute"
win.style.top = "100px"
win.style.left = "100px"
win.style.perspectiveOrigin = "20% 20%"
win.style.perspective = "500px"
win.style.transformStyle = "preserve-3d"

//absolute と relative の違いがわからない事件が発生してる

function createRect(){
    var rect = document.createElement('div')
    var rect_x = 0
    var rect_y = 0
    var rect_height = 100
    var rect_width = 100
    rect.style.height = `${rect_height}px`
    rect.style.width = `${rect_width}px`
    rect.style.position = 'absolute'
    rect.style.top = `${rect_y}px`
    rect.style.left = `${rect_x}px`
    //rect.style.border = "1px solid #000"
    return rect
}

let rects = []
let cube = document.createElement('div')
cube.style.top = `${WIN_HEIGHT/2-50}px` 
cube.style.left = `${WIN_WIDTH/2-50}px` 
cube.style.height = '100px'
cube.style.width = '100px'
cube.style.position = 'absolute'
cube.style.transformStyle = "preserve-3d"


function makeCube(){
    for(let i = 0; i < 6; i++){
        rects.push(createRect())
    }
    // rects[1].style.transform = "translate(50px, 0px) rotateY(90deg)"
    // rects[2].style.transform = "translate(-50px, 0px) rotateY(-90deg)"
    // rects[3].style.transform = "translate(0px, 50px) rotateX(90deg)"
    // rects[4].style.transform = "translate(0px, -50px) rotateX(-90deg)"
    // rects[5].style.transform = "translateZ(50px) rotateX(180deg)"
    rects[0].style.transform = "translateZ(50px)"
    rects[1].style.transform = "rotateY(90deg) translateZ(50px)"
    rects[2].style.transform = "rotateY(-90deg) translateZ(50px)"
    rects[3].style.transform = "rotateX(90deg) translateZ(50px)"
    rects[4].style.transform = "rotateX(-90deg) translateZ(50px)"
    rects[5].style.transform = "rotateX(180deg) translateZ(50px)"
    for(let i = 0; i < 6; i++){
        rects[i].style.backgroundColor = `hsl(${i*50}, 100%, 80%)`
        cube.appendChild(rects[i])
    }
    win.appendChild(cube)
}

makeCube()


let rotate_deg = 1
let rotate_speed = 3
let cube_z = -200 
let dig = 0
let move_speed = 0.05 
let move_length = 300 

function rotate(){
    rotate_deg += rotate_speed
    dig += move_speed
    cube.style.transform = `translateZ(${cube_z + move_length * Math.sin(dig)}px) rotateY(${rotate_deg}deg) rotateZ(${rotate_deg}deg)`
    setTimeout(rotate, 15)
}

rotate()