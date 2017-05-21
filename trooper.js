var Trooper = function(x,y){
    this.xpos = x;
    this.ypos = y+5;
}
Trooper.prototype.setup = function(){
   var b = $("<img class='trooper enemy' src='images/trooper.svg'>").css({"left":this.xpos+"px","top":this.ypos+"px"})
   b.load(function(){
        $(this).animate({'top':"95%"},4000,"swing",function(){
            console.log("reached grond")
        })
    });
    $('body').append(b);
}