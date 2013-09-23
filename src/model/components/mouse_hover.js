/**
 * Created with JetBrains WebStorm.
 * User: MANU
 * Date: 15/11/12
 * Time: 12:21 PM
 *
 */

Crafty.c('MouseHover', {
    init: function() {
        var entity = this;

        this.requires("Mouse")

        entity.bind('MouseOver', function(){
            document.body.style.cursor = "pointer";
        })
            .bind('MouseOut', function(){
                document.body.style.cursor = "default";
            })
            .bind('Remove', function(){
                document.body.style.cursor = "default";
            });

        return this;
    }
});
