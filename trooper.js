var Trooper = function(x,y){
    this.xpos = x;
    this.ypos = y+5;
}
Trooper.prototype.setup = function(){
   var b = $("<img class='trooper enemy' src='images/trooper.svg'>").css({"left":this.xpos+"px","top":this.ypos+"px"})
   b.load(function(){
        $(this).animate({'top':"50%"},4000,"linear",function(){
            $(this).attr('src',"images/paratrooper.svg");
            $(this).css('width','3%');
            $(this).animate({'top':"90%"},5000,"linear",function(){
                $(this).css('width','0.8%');
              $(this).attr('src',"images/trooper.svg");
            });
        });
    });
    $('body').append(b);
}