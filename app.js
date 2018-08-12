// Rover Object Goes Here
// ======================
var marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================


function turnLeft(rover){
 
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
 
    case "W":
    rover.direction = "S";
    break;
 
    case "S":
    rover.direction = "E";
    break;
 
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called! You are now facing " + rover.direction + ".");
}

function turnRight(rover){

  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
 
    case "W":
    rover.direction = "N";
    break;
 
    case "S":
    rover.direction = "W";
    break;
 
    case "E":
    rover.direction = "S";
    break;
  }
  console.log("turnRight was called! You are now facing " + rover.direction + ".");
}

function moveForward(rover){

  switch (rover.direction){
 
    case "W":
      rover.x--;
      break;
 
    case "N":
      rover.y--;
      break;
 
    case "S":
      rover.y++;
      break;
 
    case "E":
      rover.x++;
      break;
  }
  console.log("moveForward was called! The rover is now at coordinate (" + rover.x + "," + rover.y + ").")
}

function moveBackward(rover){

  switch (rover.direction){
 
    case "W":
      rover.x++;
      break;
 
    case "N":
      rover.y++;
      break;
 
    case "S":
      rover.y--;
      break;
 
    case "E":
      rover.x--;
      break;
  }
  console.log("moveBackward was called! The rover is now at coordinate (" + rover.x + "," + rover.y + ").")
}

function command(rover, orders){
 
  for (var i = 0; i < orders.length; i++){
    var orderCode = orders[i];
 
    switch (orderCode) {
 
      case 'l':
        turnLeft(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;
 
      case 'r':
        turnRight(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;
 
      case 'f':
        moveForward(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;
 
      case 'b':
        moveBackward(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;
 
    }
    if (rover.x < 0 || rover.y < 0){
  console.log("The rover hit a wall. Turn around!");
      break;
}
  }
}

console.log(command(marsRover, 'rffflbbb'));