var snake = [{x: 50, y:50}, {x: 51, y:50}, {x: 52, y:50}]
var tragetory = "right";
var speed = 50;
var foodCoordinate = {x: 10, y: 10};

function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}

function createBlock(coordinates) {
  var div = document.createElement("div");
  div.classList.add("block");
  div.style.left = (coordinates.x * 11) + "px";
  div.style.top = (coordinates.y * 11) + "px";
  $(".board").append(div);
  $(".block").first().css("background-color", "red")
}

function drawSnake(){
  $(".block").remove()
  for (var i = 0; i < snake.length; i++){
    createBlock(snake[i]);
  }
}

function moveSnake(){
  for (var i = snake.length - 1 ; i > 0; i--){
    snake[i] = {x: snake[i - 1].x, y: snake[i - 1].y}
  }
  switch (tragetory){
    case "right":
      snake[0].x ++
      break
    case "down":
      snake[0].y --
      break
    case "left":
      snake[0].x --
      break
    case "up":
      snake[0].y ++
      break
    default:
      console.log("no direction")
  }
}

function moveFood(x, y){
    var food = document.createElement("div");
    food.classList.add("food");
    food.style.left = (x * 11) + "px";
    food.style.top = (y * 11) + "px";
    $(".board").append(food);
    $(".block").first().css("background-color", "red")
}

document.addEventListener("keydown", function(e){
  switch (e.keyCode){
    case 39:
      tragetory = "right"
      break
    case 38:
      tragetory = "down"
      break
    case 37:
      tragetory = "left"
      break
    case 40:
      tragetory = "up"
      break
    default:
      console.log(e.keyCode)
  }
})

function gameRound(){
  moveSnake();
  drawSnake();
}

var render = setInterval(gameRound, speed)
moveFood(10, 10)
