/*

  Requisitos: 

  La nave del usuario disparará 2 misiles si está pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendrá un tiempo de recarga de 0,25s, no pudiéndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificación:

  - Hay que añadir a la variable sprites la especificación del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se añadirán
    misiles al tablero de juego en la posición en la que esté la nave
    del usuario. En el código de la clase PlayerSip es donde tienen
    que añadirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creación de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declararán los métodos de
    la clase en el prototipo

*/

describe("Clase PlayerMissile", function(){


    var canvas, ctx;

    beforeEach(function(){
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

    });

    it("draw", function(){
	// Comprobamos que draw llama a SpriteSheet.draw con los
	// parametros adecuados

	
		SpriteSheet = {
			map : {missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 }},
			draw: function() {}
		};
		spyOn(SpriteSheet, "draw");	
		var miMisil = new PlayerMissile(0, 30);

		miMisil.draw(ctx);

		expect(SpriteSheet.draw).toHaveBeenCalled();
		expect(SpriteSheet.draw.calls[0].args[1]).toEqual("missile");
		expect(SpriteSheet.draw.calls[0].args[2]).toEqual(miMisil.x);
		expect(SpriteSheet.draw.calls[0].args[3]).toEqual(miMisil.y);
    });
    
     it("step", function(){
	// Comprobamos que draw llama a SpriteSheet.draw con los
	// parametros adecuados

	
		Board = {
			remove: function(obj){}
		};
		
		var miMisil = new PlayerMissile(0, 100);
		miMisil.board=Board;
		spyOn(Board, "remove");	
		

		miMisil.step(0.001);

		expect(Board.remove).not.toHaveBeenCalled();
		
		miMisil.step(10000000);

		expect(Board.remove).toHaveBeenCalled();

    });


























});
