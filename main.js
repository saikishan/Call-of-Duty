$(document).ready(function(){
    canbase = new Base($(window).width()/2-100);
    canbase.setup();
    firangi = new Barrel($(window).width()/2);
    firangi.setup();
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