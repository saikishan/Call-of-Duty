var Hithandler = function(game){
    this.gameBoard=game;
}
Hithandler.prototype.checkHits = function(){
    var self = this;
    $('.bullet').each(function(){
        var bullet = $(this);
        $('.enemy').each(function(){
            var enemy=$(this);
            var bx = bullet.position().left;
            var by = bullet.position().top;
            var ex = enemy.position().left;
            var ey = enemy.position().top;
            if(bx>ex && bx < ex + enemy.width() && by < ey +enemy.height() && by> ey){
                console.log("got hit");
                self.gameBoard.score=self.gameBoard.score+1;
                enemy.attr('src','images/blast.gif').load(function(){
                    $(this).fadeOut(100,function(){
                        $(this).remove();
                        console.log("NOW IT IS REMOVED");
                    });
                });
                bullet.remove();
                return false;
            }//closeing if
        });//fun for each
    });
    setTimeout(function(){
        self.checkHits();
    },100);
}