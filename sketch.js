

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable:');
var c
function setup(){
  var c  = createButton("click here to Swap");
  c.mousePressed(swap)
  }

function draw()
{
}

function swap() {
[a, b] = [b, a];

console.log("The value of a after swapping:" ,+a);
console.log("The value of b after swapping:",+b);
}