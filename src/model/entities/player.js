
Crafty.c("Player", {
    id:null,
    description:null,
    arrBooks:new Array(),
    arrPictures:new Array(),
    arrEnem:new Array(),
    movementSpeed:4,
    energy:100,
    picture:null,
    enemy:null,
    direction:1,
    numM:5,
    punts:900000,
    infected:false,
    alert:false,
    init:function () {

        this.requires("2D, Canvas, playersprite , SpriteAnimation , Multiway, Keyboard, Collision")
            .attr({w:30, h:30, x:80, y:80})
            .animate("walk_left", 0, 1, 3 )
            .animate("walk_right", 0, 2, 3)
            .animate("walk_up", 0, 3, 3)
            .animate("walk_down", 0 , 0, 3)
            .animate("walk_left_caracol", 0,3 ,8)
            .animate("walk_right_caracol", 0, 1, 8)
            .animate("walk_up_caracol", 0, 2, 8)
            .animate("walk_down_caracol",0, 0, 8)
            .multiway(this.movementSpeed, { /*Enable Movement Control*/
                UP_ARROW:-90,
                DOWN_ARROW:90,
                RIGHT_ARROW:0,
                LEFT_ARROW:180
            })
            .bind("EnterFrame", function () {
                if(this.isDown("LEFT_ARROW")) {
                    if(!this.isPlaying("walk_left"))
                        if(this.infected)
                            this.animate("walk_left_caracol", 10);
                        else
                            this.animate("walk_left", 0);
                } else if(this.isDown("RIGHT_ARROW")) {
                    if(!this.isPlaying("walk_right"))
                        if(this.infected)
                            this.animate("walk_right_caracol", 10);
                        else
                            this.animate("walk_right", 0);
                } else if(this.isDown("UP_ARROW")) {
                    if(!this.isPlaying("walk_up"))
                        if(this.infected)
                            this.animate("walk_up_caracol", 0);
                        else
                            this.stop().animate("walk_up",10);
                } else if(this.isDown("DOWN_ARROW")) {
                    if(!this.isPlaying("walk_down"))
                        if(this.infected)
                            this.animate("walk_down_caracol", 10);
                        else
                            this.stop().animate("walk_down", 0);
                }
                if(this.alert){
                    pts+=this.punts;
                    Crafty.audio.play("y1",-1);
                  //  Crafty.audio.play("intro",-1);
                    Crafty.scene("good");
                }
                if(this.punts>0)
                    this.punts--;
            })


            .onHit("Book", function (ent) {
                //var book = ent[0].obj;

                //Crafty(player[0]).trigger("book",this);

            })
            .bind("KeyDown", function (e) {
                if (e.keyCode === Crafty.keys.UP_ARROW) {
                    this.direction=3;
                }
                if (e.keyCode === Crafty.keys.LEFT_ARROW) {
                    this.direction=2;
                }
                if (e.keyCode === Crafty.keys.RIGHT_ARROW) {
                    this.direction=1;
                }
                if (e.keyCode === Crafty.keys.DOWN_ARROW) {
                    this.direction=4;
                }
                
                
                

            })
            .bind('Moved', function (from) {
                
                
                if (this.hit('pared3200x1')) {
                    this.attr({x:from.x, y:from.y});
                }
                if (this.hit('pared1x1500')) {
                    this.attr({x:from.x, y:from.y});
                }
                
                if (this.hit('caracol')) {
                    this.attr({x:from.x, y:from.y});

                }
               
                
                if (this.hit('arbol1')) {
                    this.attr({x:from.x, y:from.y});

                }
                if (this.hit('arbol2')) {
                    this.attr({x:from.x, y:from.y});

                }
                if (this.hit('logo')) {
                    this.alert=true;
                }
                
            })
            .onHit("Wall", function() {

                switch (this.direction){
                    case 1:
                        if(this.infected)
                            this.x-=1;
                        else
                        this.x-=this.movementSpeed;
                        //this.animate("walk_right", 10);
                        break;
                    case 2:
                        if(this.infected)
                            this.x+=1;
                        else
                            this.x+=this.movementSpeed;
                        //this.animate("walk_left", 10);
                        break;
                    case 3:
                    if(this.infected)
                            this.y+=1;
                        else
                        this.y+=this.movementSpeed;
                        //this.animate("walk_up", 10);
                        break;
                    case 4:
                        if(this.infected)
                            this.y-=1;
                        else
                        this.y-=this.movementSpeed;
                        //this.animate("walk_down", 10);
                        break;
                }
                this.stop();
            })
            

        

    },
    setEnemy:function (data) {
        var ww=data;
    
        if(ww.energy<this.energy){
            if(!this.infected){
                this.energy-=ww.energy;
                ww.destroy();
                pts+=250;
                this.arrEnem.pop();
                Crafty.audio.play("enem",-1);
                this.addComponent("caracol");
                this.attr({w:40,h:40});
                this.infected=true;
                this.animate("walk_left_caracol", 0,3 ,8)
                .animate("walk_right_caracol", 0, 1, 8)
                .animate("walk_up_caracol", 0, 2, 8)
                .animate("walk_down_caracol",0, 0, 8);
                this.movementSpeed=1;
                this.multiway(this.movementSpeed, { /*Enable Movement Control*/
                UP_ARROW:-90,
                DOWN_ARROW:90,
                RIGHT_ARROW:0,
                LEFT_ARROW:180
                });
            }
            
        }else{
            Crafty.audio.play("l1",-1);
            Crafty.scene("gameover");
        }
    }

});