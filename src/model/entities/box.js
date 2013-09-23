Crafty.c("Box", {
    /**
     * Initialisation. Adds components, sets positions, binds mouse click handler
     */
    init: function() {
        this.addComponent("2D, Canvas, Keyboard");
        this.w = 100;
        this.h = 100;
    },
    /**
     * Convenience method for creating new boxes
     * @param x position on the x axis
     * @param y position on the y axis
     * @param color background color
     * @param onClickCallback a callback function that is called for mouse click events
     */
    makeBox: function(x, y, sprite) {
        this.addComponent(sprite).attr({x:x,y:y}).bind("KeyDown", function(e) {
            
            if(e.keyCode === Crafty.keys.A){
                scenedef="fisi";
                Crafty.scene("CountDown");
            }
        });
    }
});
