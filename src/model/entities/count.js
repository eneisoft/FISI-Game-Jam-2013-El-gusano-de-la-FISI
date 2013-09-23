/**
 * Created with JetBrains WebStorm.
 * User: necros
 * Date: 20/11/12
 * Time: 01:14 AM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Count",{
    id:null,
    nivel:"sistemas",
    init:function(){

        this.requires("2D, Canvas , count321 , SpriteAnimation, Collision")
            .attr({w:200,h:200,x:Crafty.viewport.width/2-100,y:Crafty.viewport.height/2-100})
            .animate("s1", 0, 0, 2)
            .bind("EnterFrame",function(){

                if(!this.isPlaying('s1')){
                    Crafty.scene(scenedef);
                }
            });
    },

    animate321:function(){
        //Crafty.audio.play("tick",-1);
        this.animate("s1",speed=100);
    }


});