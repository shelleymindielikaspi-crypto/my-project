function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fEIpqx8bL6":
        Script1();
        break;
      case "6SmvWyR4akJ":
        Script2();
        break;
      case "5fldlA6Xo8m":
        Script3();
        break;
      case "5Wkgi4hMiy7":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6VlRLHPux12');
const duration = 750;
const easing = 'ease-out';
const id = '69TWLQ6da7k';
const growAmount = 0.3;
const delay = 4750;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6KG2yjL6P88');
const duration = 750;
const easing = 'ease-out';
const id = '5nwSIzknCNJ';
const growAmount = 0.3;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('666qDB2syQA');
const duration = 750;
const easing = 'ease-out';
const id = '5fdPQP0pRfC';
const growAmount = 0.3;
const delay = 15000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6JRUtLZCpmX');
const duration = 750;
const easing = 'ease-out';
const id = '5YMSt93WAyG';
const growAmount = 0.3;
const delay = 20000;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
