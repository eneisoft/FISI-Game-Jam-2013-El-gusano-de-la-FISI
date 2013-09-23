/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 15/11/12
 * Time: 12:21 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Picture",{
    id:null,
    description:null,
    puntos:100,
    p_state:true,
    init:function(){

        this.requires("2D, Canvas, marca , Collision")
            .attr({x:360,y:100,w:20,h:20})


    }
});

