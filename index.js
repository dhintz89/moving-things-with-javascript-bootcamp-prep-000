const app = "I don't do much."

var dodger=document.getElementById('#dodger');

function moveDodgerRight() {
  document.addEventListener('keydown',function(e) {
    if(e.which===39) {
      var rightNum=dodger.style.right.replace('px','');
      var right=parseInt(rightNum,10);
      if(right>0) {
        dodger.style.right=`${right-1}px`;
      }
    }
  });
}