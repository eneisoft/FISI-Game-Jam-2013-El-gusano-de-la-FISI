/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 15/11/12
 * Time: 12:23 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.scene("gameover",function(){
    Crafty.viewport.x=0;
    Crafty.viewport.y=0;
    
    var port=Crafty.e("2D, Canvas,gameover, Keyboard").attr({x:0,y:0}).bind("KeyDown", function(e) {
        if(e.keyCode === Crafty.keys.SPACE){
            Crafty.scene("menus");
        }
    });

});