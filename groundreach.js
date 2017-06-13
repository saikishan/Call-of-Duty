var Groundreach = function(game){
    this.gameBoard=game;
}
Groundreach.prototype.checkReached = function () {
    var self = this;
    if(self.gameBoard.gameRunning==true)
    $(".trooper").each(function(){
        var trooper = $(this);
        var height = trooper.position().top;
        var fixedHeight = (83*($(window).height()))/100;
        if(height > fixedHeight){
            self.gameBoard.reached=self.gameBoard.reached+1;
            trooper.remove();
        }
        if(self.gameBoard.reached > 3){
            self.gameBoard.win();//location.reload();
            self.gameBoard.gameRunning= false;
        }
    });
    setTimeout(function () {
        self.checkReached();
    },50);
}