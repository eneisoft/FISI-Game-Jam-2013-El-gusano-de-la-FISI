/**
 * Created with JetBrains WebStorm.
 * User: Manuel
 * Date: 20/11/12
 * Time: 11:57 AM
 * To change this template use File | Settings | File Templates.
 */
Crafty.scene("good",function(){
    Crafty.viewport.x=0;
    Crafty.viewport.y=0;
    var port=Crafty.e("2D, Canvas, bienhecho, Keyboard").attr({x:0,y:0}).bind("KeyDown", function(e) {
        if(e.keyCode === Crafty.keys.SPACE){
            Crafty.scene("menus");
        }
    });

});