var Enemy = function(maxNo){
     this.max = maxNo;
     this.cur = 0;
     this.elem = null;
     this.choppers=null;
}
Enemy.prototype.setup=function(){
    this.elem = $("<div id='enemy'>").css({
        top:"0px",
        left:"0px"
    });
    $("body").append(this.elem)
}
Enemy.prototype.attack = function(){
    while(this.cur < this.max){
        console.log("in time out fun");
        setTimeout(function(){
        console.log("in time out");
        var val =((Math.floor(Math.random()*10)%4)+1);
        var chopter=$("<img id='chop' class='chopper'src='images/helicopter0"+val+".gif'>");
         $("#enemy").append(chopter);
        enemies.attack();
    },10000);
        this.cur=this.cur+1;           
    }
};