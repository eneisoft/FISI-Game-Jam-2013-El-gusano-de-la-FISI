/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 15/11/12
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Caracol",{
    id:null,
    movementSpeed:1,
    sprite:2,
    energy:10,
    player:null,
    dx:0,
    dy:0,
    wt:true,
    type:1,
    type_img:1,
    direction:0,
    is_type:1,
    power:200,
    init:function(){
        var a=Crafty.math.randomInt(0,3);
        var enem="caracol";
        
        this.requires("2D, Canvas ,"+enem+", SpriteAnimation, Collision")
            .attr({w:40,h:40,x:50,y:30})
            .animate("walk_left", 0,3 ,8)
            .animate("walk_right", 0, 1, 8)
            .animate("walk_up", 0, 2, 8)
            .animate("walk_down",0, 0, 8)
            .bind("EnterFrame",function(){
                switch (this.direction){
                    case 1:

                            this.animate("walk_right", 0);
                        break;
                    case 2:

                            this.animate("walk_left", 0);
                        break;
                    case 3:

                            this.animate("walk_up", 0);
                        break;
                    case 4:

                            this.animate("walk_down", 0);
                        break;
                }
                if(this.player!=null){
                    this.wt=true;
                    if(Math.abs(this.player.x-this.x)<100 || Math.abs(this.player.y-this.y)<100){
                        if(Math.abs(this.player.x-this.x)-Math.abs(this.player.y-this.y)>0){
                            if(this.player.energy>this.energy&&this.player.infected==false)
                                if(this.player.x-this.x<0){
                                    this.dx=-this.movementSpeed;
                                    this.direction=2;
                                }else{
                                    this.dx=this.movementSpeed;
                                    this.direction=1;
                                }
                            else
                                if(this.player.x-this.x<0){
                                    this.dx=this.movementSpeed;
                                    this.direction=1;
                                }
                                else{
                                    this.dx=-this.movementSpeed;
                                    this.direction=2;
                                }
                            this.dy=0;
                        }else{
                            if(this.player.energy>this.energy&&this.player.infected==false)
                                if(this.player.y-this.y<0) {
                                    this.dy=-this.movementSpeed;
                                    this.direction=3;
                                }
                                else{
                                    this.dy=this.movementSpeed;
                                    this.direction=4;
                                }
                            else
                                if(this.player.y-this.y<0){
                                    this.dy=this.movementSpeed;
                                    this.direction=4;
                                }
                                else{
                                    this.dy=-this.movementSpeed;
                                    this.direction=3;
                                }
                            this.dx=0;
                        }

                    }else{
                        this.direction=0;
                        this.dx=0;
                        this.dy=0;
                    }

                }
                this.attack();
                /*if(this.wt==false){
                    this.x=this.x+this.movementSpeed;
                    this.y=this.y+this.movementSpeed;
                    this.attack();
                }*/
                this.conviction();
            }).bind("KeyDown", function(e) {
                if(e.keyCode === Crafty.keys.L){
                    console.log(this.energy);
                    console.log(this.movementSpeed);   
                }
            })




    },
    attack:function(){
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        if (this.hit('playersprite')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
            this.player.setEnemy(this);
        }
        
        if (this.hit('pared1x1500')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
       if (this.hit('pared3200x1')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        
        if (this.hit('arbol1')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('caracol')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('arbol2')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('espina')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }


    },
    conviction:function(){
        if(Math.abs(Math.abs(this.player.x)-Math.abs(this.x))<=35&Math.abs(Math.abs(this.player.y)-Math.abs(this.y))<=35){
            this.player.setEnemy(this);
        }
    }

});