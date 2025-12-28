今回の学び（要点）

- canvas は `fillStyle` と `fillRect` で塗りつぶす。`ctx.arc` の前に `beginPath()` を入れないとパスが蓄積されて伸びる。
```js
const can = document.getElementById("can")
const ctx = can.getContext("2d")
ctx.fillStyle = "black"
ctx.fillRect(0, 0, can.width, can.height)
ctx.beginPath()
ctx.arc(100, 100, 20, 0, 2 * Math.PI)
ctx.fillStyle = "red"
ctx.fill()
```

- `setTimeout` は1回だけ実行なので、繰り返すなら自己呼び出し。`while(true)` はイベントループを止めるのでNG。
```js
function loop() {
  // 更新・描画
  setTimeout(loop, 16)
}
loop()
```

- `setInterval` は一定間隔で繰り返し。止めるなら `clearInterval`。
```js
const id = setInterval(() => {
  // 更新・描画
}, 16)
// clearInterval(id)
```

- CSS の `position` は用途が違う。子を親基準で置きたいなら「親を positioned（relative/absolute）」「子を absolute」。
```js
parent.style.position = "relative"
child.style.position = "absolute"
child.style.left = "50px"
child.style.top = "20px"
```

- CSS の `transform` はスペース区切りで順に適用。順序で移動方向が変わる。
```js
// 回転してから移動
el.style.transform = "rotateY(90deg) translateZ(50px)"
```

- 3Dっぽさは `perspective` と `transform-style: preserve-3d` が重要。
```js
stage.style.perspective = "200px"
cube.style.transformStyle = "preserve-3d"
```

- 立方体の面は「回転してから `translateZ`」で配置する。
```js
front.style.transform = "translateZ(50px)"
back.style.transform = "rotateY(180deg) translateZ(50px)"
right.style.transform = "rotateY(90deg) translateZ(50px)"
left.style.transform = "rotateY(-90deg) translateZ(50px)"
top.style.transform = "rotateX(90deg) translateZ(50px)"
bottom.style.transform = "rotateX(-90deg) translateZ(50px)"
```

- `style.width/height/top/left` は文字列＋単位が必要（`"100px"`）。数値だけだと効かない。
```js
box.style.width = "100px"
box.style.height = "100px"
box.style.left = "150px"
box.style.top = "80px"
```

- 色は `color` ではなく `backgroundColor`。`hsv()` は使えないので `hsl()` などを使う。
```js
rect.style.backgroundColor = "hsl(200, 80%, 50%)"
```
