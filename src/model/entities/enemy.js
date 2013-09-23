/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 15/11/12
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Enemy",{
    id:null,
    movementSpeed:2,
    sprite:2,
    energy:140,
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
        var enem="enemy"+(a+1);
        switch(a){
            case 1:
                this.movementSpeed= 1;
                this.energy=-5;
            break;
            case 2:
                this.movementSpeed= 1;
                this.energy=-5;
            break;
            case 3:
                this.movementSpeed= 2;
                this.energy=300;
            break;
            case 4:
                this.movementSpeed= 2;
                this.energy=400;
            break;
            case 5:
                this.movementSpeed= 5;
                this.energy=500;
            break;

            
        }
        this.requires("2D, Canvas ,"+enem+", SpriteAnimation, Collision")
            .attr({w:20,h:20,x:50,y:350})
            .animate("walk_left", 9,a,11)
            .animate("walk_right", 6, a, 8)
            .animate("walk_up", 3, a, 5)
            .animate("walk_down",0, a, 2)
            .bind("EnterFrame",function(){
                switch (this.direction){
                    case 1:

                            this.animate("walk_right", 10);
                        break;
                    case 2:

                            this.animate("walk_left", 10);
                        break;
                    case 3:

                            this.animate("walk_up", 10);
                        break;
                    case 4:

                            this.animate("walk_down", 10);
                        break;
                }
                if(this.player!=null){
                    this.wt=true;
                    if(Math.abs(this.player.x-this.x)<100 || Math.abs(this.player.y-this.y)<100){
                        if(Math.abs(this.player.x-this.x)-Math.abs(this.player.y-this.y)>0){
                            if(this.player.energy<this.energy)
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
                            if(this.player.energy<this.energy)
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
        if(this.hit('Wall')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
        }
        if (this.hit('playersprite')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
            this.player.setEnemy(this);
        }
        if (this.hit('pared10x600')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('pared20x300')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('pared200x20')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('pared1200x10')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('enemy1')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('carpetagi')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('barra')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('pared20x250')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
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
        if (this.hit('enemy2')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('enemy3')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('enemy4')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('carpeta1')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }
        if (this.hit('carpeta2')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
            this.stop();
        }

    },
    conviction:function(){
        if(Math.abs(Math.abs(this.player.x)-Math.abs(this.x))<=25&&Math.abs(Math.abs(this.player.y)-Math.abs(this.y))<=25){
            this.player.setEnemy(this);
        }
    }

});