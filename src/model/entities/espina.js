/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 15/11/12
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */
Crafty.c("Espina",{
    id:null,
    movementSpeed:3,
    sprite:2,
    energy:2000,
    player:null,
    dx:0,
    dy:0,
    dyant:0,
    dxant:0,
    wt:true,
    type:1,
    type_img:1,
    direction:1,
    is_type:1,
    power:200,
    dd:1,
    cont:500,
    max:500,
    init:function(){
        
        var enem="espina";
        
        this.requires("2D, Canvas ,"+enem+", Collision")
            .attr({w:20,h:20,x:120,y:120})
            .bind("EnterFrame",function(){
                
                if(this.player!=null){
                    if(this.wt==false){
                        if(this.direction==1)
                            this.direction=2;
                        else
                            this.direction=1;
                    }
                    this.wt=true;
                    if(this.is_type==1){
                        if(this.direction==2){
                            this.dx=-this.movementSpeed;        
                        }else{
                            this.dx=+this.movementSpeed;
                        }

                    }
                    if(this.is_type==2){
                        if(this.direction==2){
                            this.dx=+this.movementSpeed;        
                        }else{
                            this.dx=-this.movementSpeed;
                        }

                    }
                    if(this.is_type==3){
                        if(this.direction==2){
                            this.dd=-this.dd;
                            this.dx=+(this.dd)*this.movementSpeed;        
                        }else{
                            this.dy=+(this.dd)*this.movementSpeed;
                        }
                    }
                    if(this.is_type==4){
                        if(this.direction==2){
                            this.dd=-this.dd;
                            this.dx=-(this.dd)*this.movementSpeed;        
                        }else{
                            this.dy=-(this.dd)*this.movementSpeed;
                        }
                    }

                    if(this.is_type==5){
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
                    if(this.is_type==6){
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
            //this.stop();
            this.player.setEnemy(this);
        }
       
       
        if (this.hit('pared1x1500')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('pared3200x1')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
           // this.stop();
        }
        
        if (this.hit('espina')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('arbol1')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('arbol2')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }
        if (this.hit('caracol')) {
            this.attr({x: this.x-this.dx, y:this.y-this.dy});
            this.wt=false;
          //  this.stop();
        }

    },
    conviction:function(){
        if(Math.abs(Math.abs(this.player.x)-Math.abs(this.x))<=25&&Math.abs(Math.abs(this.player.y)-Math.abs(this.y))<=25){
            this.player.setEnemy(this);
        }
    }

});