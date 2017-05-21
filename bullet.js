var Bullet = function(x,angle){
    this.x=x;
    this.direction=angle;
}
Bullet.prototype.setup=function(){
    var xdest=0;
    var ydest=0;
    if(this.direction>=-50&&this.direction<=50){
        xdest=50+this.direction;
        ydest=-10;
        console.log("greter than -50 and less than 50");
    }
    else{
        if(this.direction<-50){
            xdest=3;
            ydest=-2*(this.direction+50);
        }
        else{
            xdest=97;
            ydest=2*(this.direction-50);
        }
    }
    console.log(xdest);
    console.log(ydest);
    var b = $('<img src="images/bullet.svg" class="bullet">').css({left:(this.x)+"px",bottom:"14%"})
    .load(function(){
        $(this).animate({
            top:ydest+"%",
            left:xdest+"%"
        },1000,"linear",function(){
            $(this).remove();
        })
    });
    $('body').append(b);
}