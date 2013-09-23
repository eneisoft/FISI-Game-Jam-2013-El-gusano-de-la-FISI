/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 15/11/12
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Spider",{
    id:null,
    movementSpeed:3,
    sprite:2,
    energy:1000,
    player:null,
    dx:0,
    dy:0,
    dxant:0,
    dyant:0,
    wt:true,
    type:1,
    type_img:1,
    direction:1,
    is_type:1,
    power:200,
    xant:0,
    yant:0,
    init:function(){
        var a=Crafty.math.randomInt(0,3);
        var enem="spider";
        
        this.requires("2D, Canvas ,"+enem+", SpriteAnimation, Collision")
            .attr({w:40,h:40,x:50,y:30})
            .animate("walk_left", 0,1 ,2)
            .animate("walk_right", 0, 2, 2)
            .animate("walk_up", 0, 3, 2)
            .animate("walk_down",0, 0, 2)
            .bind("EnterFrame",function(){
                switch (this.direction){
                    case 1:

                            this.animate("walk_right", 3);
                        break;
                    case 2:

                            this.animate("walk_left", 3);
                        break;
                    case 3:

                            this.animate("walk_up", 3);
                        break;
                    case 4:

                            this.animate("walk_down", 3);
                        break;
                }
                if(this.player!=null){
                    this.wt=true;
                    if(Math.abs(this.player.x-this.x)<120 || Math.abs(this.player.y-this.y)<120){
                        if(Math.abs(this.player.x-this.x)-Math.abs(this.player.y-this.y)>0){
                            if(this.player.energy<this.energy&&this.player.infected==false){
                                if(this.player.x-this.x<0){
                                    this.dx=-this.movementSpeed;
                                    this.direction=2;
                                }else{
                                    this.dx=this.movementSpeed;
                                    this.direction=1;
                                }
                                this.dy=0;
                            }
                            else{
                                if(this.x==this.xant&&this.y==this.yant)
                                this.direction=Crafty.math.randomInt(1,4);
                                switch(this.direction){
                                    case 1:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dy=0;
                                        this.dx=-this.movementSpeed;
                                        this.direction=1;
                                    break;
                                    case 2:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dy=0;
                                        this.dx=+this.movementSpeed;
                                        this.direction=2;
                                    break;
                                    case 3:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dx=0;
                                        this.dy=-this.movementSpeed;
                                        this.direction=3
                                    break;
                                    case 4:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dx=0;
                                        this.dy=+this.movementSpeed;
                                        this.direction=4;
                                    break;
                                }
                            }
                            
                        }else{
                            if(this.player.energy<this.energy&&this.player.infected==false){
                                if(this.player.y-this.y<0) {
                                    this.dy=-this.movementSpeed;
                                    this.direction=3;
                                }
                                else{
                                    this.dy=this.movementSpeed;
                                    this.direction=4;
                                }
                            this.dx=0;
                            }else{
                                if(this.x==this.xant&&this.y==this.yant)
                                this.direction=Crafty.math.randomInt(1,4);
                                switch(this.direction){
                                    case 1:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dy=0;
                                        this.dx=-this.movementSpeed;
                                        this.direction=1;
                                    break;
                                    case 2:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dy=0;
                                        this.dx=+this.movementSpeed;
                                        this.direction=2;
                                    break;
                                    case 3:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dx=0;
                                        this.dy=-this.movementSpeed;
                                        this.direction=3
                                    break;
                                    case 4:
                                        this.xant=this.x;
                                        this.yant=this.y;
                                        this.dx=0;
                                        this.dy=+this.movementSpeed;
                                        this.direction=4;
                                    break;
                                }
                            }
                            
                        }

                    }else{
                        if(this.x==this.xant&&this.y==this.yant)
                            this.direction=Crafty.math.randomInt(1,4);
                        switch(this.direction){
                            case 1:
                                this.xant=this.x;
                                this.yant=this.y;
                                this.dy=0;
                                this.dx=-this.movementSpeed;
                                this.direction=1;
                            break;
                            case 2:
                                this.xant=this.x;
                                this.yant=this.y;
                                this.dy=0;
                                this.dx=+this.movementSpeed;
                                this.direction=2;
                            break;
                            case 3:
                                this.xant=this.x;
                                this.yant=this.y;
                                this.dx=0;
                                this.dy=-this.movementSpeed;
                                this.direction=3
                            break;
                            case 4:
                                this.xant=this.x;
                                this.yant=this.y;
                                this.dx=0;
                                this.dy=+this.movementSpeed;
                                this.direction=4;
                            break;
                        }
                        
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