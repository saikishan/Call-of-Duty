var Base = function(x){
    this.posx = x+"px";
    this.imageurl = "images/canonbase.svg";
    this.elem=null;
}
Base.prototype.setup = function (){
    this.elem = $("<img id='canonbase' src='"+this.imageurl+"'>");
    this.elem.css({bottom:"5%",left:this.posx});
    $("body").append(this.elem);
}
