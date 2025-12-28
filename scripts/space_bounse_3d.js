WIN_HEIGHT = 300
WIN_WIDTH = 300

const win = document.getElementById("win")
win.style.height = `${WIN_HEIGHT}px`
win.style.width = `${WIN_WIDTH}px`
win.style.position = "absolute"
win.style.top = "50px"
win.style.left = "50px"
win.style.perspectiveOrigin = "30% 30%"
win.style.perspective = "300px"
win.style.transformStyle = "preserve-3d"

FLOOR_HEIGHT=700
FLOOR_WIDTH=700

var box = document.createElement("div")
var depth = -400
box.style.position = "absolute"
box.style.transformStyle = "preserve-3d"
box.style.transform = `translateZ(${depth}px)`

const floor = document.createElement("div")
floor.style.height = `${FLOOR_HEIGHT}px`
floor.style.width = `${FLOOR_WIDTH}px`
floor.style.background = "linear-gradient(#666, #222)"
floor.style.position = "absolute"
floor.style.top = "0px"
floor.style.left = "0px"
floor.style.transform = `rotateX(-90deg) translateZ(${FLOOR_HEIGHT/2}px)`
box.appendChild(floor)

WALL_HEIGHT=700
WALL_WIDTH=700

const left_wall = document.createElement("div")
left_wall.style.height = `${WALL_HEIGHT}px`
left_wall.style.width = `${WALL_WIDTH}px`
left_wall.style.background = "linear-gradient(to right, #666, #222)"
left_wall.style.position = "absolute"
left_wall.style.top = "0px"
left_wall.style.left = "0px"
left_wall.style.transform = `rotateY(90deg) translateZ(${WALL_WIDTH/2}px)`
box.appendChild(left_wall)

const right_wall = document.createElement("div")
right_wall.style.height = `${WALL_HEIGHT}px`
right_wall.style.width = `${WALL_WIDTH}px`
right_wall.style.background = "linear-gradient(to left, #666, #222)"
right_wall.style.position = "absolute"
right_wall.style.top = "0px"
right_wall.style.left = "0px"
right_wall.style.transform = `rotateY(-90deg) translateZ(${WALL_WIDTH/2}px)`
box.appendChild(right_wall)

const back_wall = document.createElement("div")
back_wall.style.height = `${WALL_HEIGHT}px`
back_wall.style.width = `${WALL_WIDTH}px`
back_wall.style.background = "#222"
back_wall.style.position = "absolute"
back_wall.style.top = "0px"
back_wall.style.left = "0px"
back_wall.style.transform = `rotateX(-180deg) translateZ(${WALL_WIDTH/2}px)`
box.appendChild(back_wall)

const top_wall = document.createElement("div")
top_wall.style.height = `${WALL_HEIGHT}px`
top_wall.style.width = `${WALL_WIDTH}px`
top_wall.style.backgroundColor = "brown"
top_wall.style.background = "linear-gradient(#666, #222)"
top_wall.style.top = "0px"
top_wall.style.left = "0px"
top_wall.style.transform = `rotateY(180deg) rotateX(90deg)  translateZ(${WALL_WIDTH/2}px)`
box.appendChild(top_wall)

win.appendChild(box)

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
    return rect
}

let rects = []
let cube = document.createElement('div')
cube.style.top = `${WIN_HEIGHT/2+50}px` 
cube.style.left = `${WIN_WIDTH/2+50}px` 
cube.style.height = '100px'
cube.style.width = '100px'
cube.style.position = 'absolute'
cube.style.transformStyle = "preserve-3d"

function makeCube(){
    for(let i = 0; i < 6; i++){
        rects.push(createRect())
    }
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
let cube_z = -250 
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