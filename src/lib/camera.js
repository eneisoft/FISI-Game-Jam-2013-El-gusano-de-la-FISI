/**
 * Created with JetBrains WebStorm.
 * User: necros
 * Date: 18/11/12
 * Time: 03:35 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Camera",{
    init: function() {  },
    camera: function(obj) {
        this.set(obj);
        var that = this;
        that.bind("KeyDown", function(e) {
            
        });
        obj.bind("Moved",function(location) {
            that.set(location);
        });
    },
    set: function(obj) {
        if(-1*(-obj.x + Crafty.viewport.width / 2)>0&&(-obj.x + Crafty.viewport.width / 2)>-3200){
            Crafty.viewport.x = -obj.x + Crafty.viewport.width / 2;

        }
        if(-1*(-obj.y + Crafty.viewport.height / 2)>0&& (-obj.y + Crafty.viewport.height / 2)>-1500){
            Crafty.viewport.y = -obj.y + Crafty.viewport.height / 2;

        }

    }
});
