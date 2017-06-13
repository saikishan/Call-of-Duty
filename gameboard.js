var Gameboard = function(){
    this.score=0;
    this.reached=0;
    this.gameRunning= true;
}
Gameboard.prototype.win=function(){
    $("#verdict").html("the score is "+this.score+" no of troops reached"+this.reached);
    $("#win").show();
}