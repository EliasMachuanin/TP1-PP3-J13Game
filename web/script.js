var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};



window.onkeydown = function (e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = true;  // only one key per event
    else if (kc === 38) Keys.up = true;    // so check exclusively
    else if (kc === 39) Keys.right = true;
    else if (kc === 40) Keys.down = true;
    verifMove();
};

window.onkeyup = function (e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = false;
    else if (kc === 38) Keys.up = false;
    else if (kc === 39) Keys.right = false;
    else if (kc === 40) Keys.down = false;
    verifMove();
};


function verifMove() {
    if (Keys.up) {
        movePlayer("up");
    }
    else if (Keys.down) {  // both up and down does not work so check excl.
        movePlayer("down");
    }

    if (Keys.left) {
        movePlayer("left");
    }
    else if (Keys.right) {
        movePlayer("right");
    }
}



function movePlayer(move) {
    var player = document.getElementById("player");
    var positionActual = getPosition(player);
    console.log(positionActual);
    if(move == "left"){
        if(positionActual.x > 430){
            player.style.left = (positionActual.x - 9) + 'px';
        }
    }

    if(move == "right"){
        if(positionActual.x < 870){
            player.style.left = (positionActual.x + 5) + 'px';
        }
    }

    if(move == "up"){
        if(positionActual.y > 110){
            player.style.top = (positionActual.y - 9) + 'px';
        }
    }

    if(move == "down"){
        if(positionActual.x < 546){
            player.style.top = (positionActual.y + 5) + 'px';
        }
    }

    console.log(move);
    console.log(positionActual);
}


function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        // var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        // var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - 0 + el.clientLeft);
        yPos += (el.offsetTop - 0 + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - 0 + el.clientLeft);
        yPos += (el.offsetTop - 0 + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
