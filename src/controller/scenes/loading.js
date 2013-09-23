
Crafty.scene("Loading",function(){

        var toLoad = [];
        toLoad.push(
            game_path + "resources/img/bg.png",
            game_path + "resources/img/piso.png",
            game_path + "resources/img/count.png",
            game_path + "resources/img/eneisoft/lineah.JPG",
            game_path + "resources/img/eneisoft/lineav.JPG",
            game_path + "resources/img/caracol.png",
            game_path + "resources/img/arbol1.png",
            game_path + "resources/img/arbol2.png",
            game_path + "resources/img/espina.png",
            game_path + "resources/img/inicio.png",
            game_path + "resources/img/gusano.png",
            game_path + "resources/img/win.png",
            game_path + "resources/img/logo.png",
            game_path + "resources/img/apider.png",
            game_path + "resources/img/eneisoft2013.png");
        for(var i in Crafty.assets){
            toLoad.push(i);
        }
        
        Crafty.background("url("+game_path+"resources/img/bg.png) black");
        
        Crafty.sprite(3000,1, game_path + "resources/img/eneisoft/lineah.JPG", {

            pared3200x1: [0,0]
        });
        Crafty.sprite(1,1500, game_path + "resources/img/eneisoft/lineav.JPG", {

           pared1x1500 : [0,0]
        });
        Crafty.sprite(900,500, game_path + "resources/img/inicio.png", {

            croquis: [0,0]
        });
        Crafty.sprite(900,500, game_path + "resources/img/game_over.png", {

            gameover: [0,0]
        });
        Crafty.sprite(900,500, game_path + "resources/img/win.png", {

            bienhecho: [0,0]
        });
        Crafty.sprite(301,298, game_path + "resources/img/logo.png", {

            logo: [0,0]
        });

        Crafty.sprite(30, 30, game_path + "resources/img/gusano.png", {

            playersprite: [0,0]
        });
        Crafty.sprite(50, 50, game_path + "resources/img/caracol.png", {

            caracol: [0,0]
        });
        Crafty.sprite(96, 96, game_path + "resources/img/apider.png", {
            spider: [0,0]
        });
       
        Crafty.sprite(100, game_path + "resources/img/piso.png", {
            piso: [0,0]

        });
        
        
        
        
        
        Crafty.sprite(200, 200 , game_path + "resources/img/count.png", {
            count321: [0,0]

        });
       
        Crafty.sprite(64, 64 , game_path + "resources/img/espina.png", {
            espina: [0,0]

        });
        
        Crafty.sprite(100, game_path + "resources/img/unmsm.png", {
            sistemasbtn: [0,0]
        });
        Crafty.sprite(64, 80 , game_path + "resources/img/arbol1.png", {
            arbol1: [0,0]

        });
        Crafty.sprite(49, 50 , game_path + "resources/img/arbol2.png", {
            arbol2: [0,0]

        });

        //Select DOM elements
        var bar = $('#load');
        var button = $('.button');
        var text = bar.find('.text');
        $("#menu").hide();
        $('#interface').hide();

        
        text.text("Cargando ...");

        bar.progressbar({
            value:0

        });


        
            Crafty.scene("menus");


        $('.skip').live('click',function(){
            bar.fadeOut(1000,function(){
                button.show();
            });

        });

        Crafty.load(toLoad,
            function() {
                
                bar.fadeOut(1000,function(){
                    button.show();
                });

            },
            function(e) {
                var src = e.src ||"";

               
                text.text("Cargando "+src.substr(src.lastIndexOf('/') + 1).toLowerCase()+" Loaded: "+~~e.percent+"%");
                bar.progressbar({
                    value:~~e.percent
                });


            },
            function(e) {
             
                var src = e.src ||"";
                console.log("Error en la carga: "+src.substr(src.lastIndexOf('/') + 1).toLowerCase());
            }
        );

        Crafty.audio.add("music_bg",[
            game_path + "resources/music/nov.mp3"

        ]);

        Crafty.audio.add("l1",[ game_path + "resources/music/l2.wav"]);
        Crafty.audio.add("tick",[ game_path + "resources/music/SOUND_321.mp3"]);
        Crafty.audio.add("y1",[ game_path + "resources/music/y1.wav"]);
        Crafty.audio.add("enem",[ game_path + "resources/music/enem.mp3"]);
        //Crafty.audio.play("intro",-1);
    },

    function(){
        //Crafty.audio.stop();

        $('#loading').hide();
    });

