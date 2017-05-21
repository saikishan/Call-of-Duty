var Helicopter = function(no,imgsrc){
    this.src = imgsrc;
    this.id=no;
    this.xpos= no>2?95:0;
}
Helicopter.prototype.setup = function(){
   var b = $("<img class='chopper enemy' src='"+this.src+"'>").css("left",this.xpos+"%")
   console.log(this.id);
   if(this.id<=2)
   b.load(function(){
        $(this).animate({'left':"95%"},5000,"linear",function(){
            $(this).remove();
        })
    });
   else
      b.load(function(){
        $(this).animate({'left':"0%"},7000,"linear",function(){
            $(this).remove();
        })
    });
    $('body').append(b);
}