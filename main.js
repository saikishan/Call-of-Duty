$(document).ready(function(){
    canbase = new Base($(window).width()/2-100);
    canbase.setup();
    firangi = new Barrel($(window).width()/2);
    firangi.setup();
    setInterval(function(){
        var i = (Math.floor(Math.random()*10)%4)+1;
        var af = new Helicopter(i,"images/helicopter0"+i+".gif");
        af.setup();
    },2000);
    setInterval(function(){
        var lanch = $(".chopper:first").position();
        console.log(lanch);
        var tf = new Trooper(lanch.left,lanch.top);
        tf.setup();
    },2200)
}).keydown(function(k){
    if(k.which===37){//left arrow
        k.preventDefault();
        firangi.rotateleft();
    }
    else if(k.which===39){//right arrow
        k.preventDefault();
        firangi.rotateright();
    }
    else if(k.which===32){
        console.log("hoolo");
        k.preventDefault();
        firangi.fire();
    }
}).mousedown(function(){
    //k.preventDefault();
    firangi.fire();
});