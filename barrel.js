var Barrel = function(x){
    this.posx = x;
    this.imageurl = "images/canonBarrel.svg";
    this.elem=null;
    this.angle = 0;
}
Barrel.prototype.setup = function (){
    this.elem = $("<img id='canonBarrel' src='"+this.imageurl+"'>");
    this.elem.css({bottom:"15.5%",left:(this.posx-10)+"px"});
    $("body").append(this.elem);
}
Barrel.prototype.rotateleft = function(){
    if(this.angle > -90){
        console.log(this.angle);
         this.angle=this.angle-1;
        this.elem.css({
            transform:"rotate("+this.angle+"deg)" 
        });
    }
}
Barrel.prototype.rotateright = function(){
    if(this.angle < 90){
        this.angle=this.angle+1;
        this.elem.css({
            transform:"rotate("+this.angle+"deg)" 
        });
    }
}
Barrel.prototype.fire = function(){
    console.log("in fire");
     var bullet = new Bullet(this.posx,this.angle);
     bullet.setup();  
}