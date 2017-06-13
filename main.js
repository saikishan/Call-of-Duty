$(document).ready(function(){
    var gamescoreboard = new Gameboard();//to maintan the score of the player
    canbase = new Base($(window).width()/2-100);
    canbase.setup();//setting up the cannon base 
    firangi = new Barrel($(window).width()/2);//just a fun name
    firangi.setup();
    setInterval(function(){
        var i = (Math.floor(Math.random()*10)%4)+1;
        var af = new Helicopter(i,"images/helicopter0"+i+".gif");
        af.setup();//to create a chopper of equal time
    },1500);
    setInterval(function(){
        var lanch = $(".chopper:first").position();
        console.log(lanch);
        var tf = new Trooper(lanch.left,lanch.top);
        tf.setup();
    },2000)//create a chopper each time
    var hitHandler = new Hithandler(gamescoreboard);    //to maintain score i send score board
    hitHandler.checkHits();
    var Ground = new Groundreach(gamescoreboard);
    Ground.checkReached();
/*the bellow code is for event handlers keyboard and mouse*/
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
})
$("body").mousemove(event,function(){
    console.log("xpoxs = "+event.clientX+"ypoxs = "+event.clientY);
    console.log("the width of the"+$(window).width()+"height"+$(window).height());
});