			//Mouse
			var valorM = 0;
			var precoM = 100;
			var elementoM = document.getElementById("x");
			var elementoPrecoM = document.getElementById("precoM");
			var botaoAumentaM = document.getElementById("aumentaM");
			var botaoDiminuiM = document.getElementById("diminuiM");
				
			botaoAumentaM.addEventListener("click", function(){
				elementoM.innerText = ++valorM;
				elementoPrecoM.innerText = precoM*valorM;
			});
			botaoDiminuiM.addEventListener("click", function(){
				elementoM.innerText = --valorM;
				if(valorM==0)
					elementoPrecoM.innerText = 0;
				else
					elementoPrecoM.innerText = (precoM*valorX)-precoM+100;
			});
			//Teclado
			var valorT = 0;
			var precoT = 80;
			var elementoT = document.getElementById("y");
			var elementoPrecoT = document.getElementById("precoT");
			var botaoAumentaT = document.getElementById("aumentaT");
			var botaoDiminuiT = document.getElementById("diminuiT");
				
			botaoAumentaT.addEventListener("click", function(){
				elementoT.innerText = ++valorT;
				elementoPrecoT.innerText = precoT*valorT;
			});
			botaoDiminuiT.addEventListener("click", function(){
				elementoT.innerText = --valorT;
				if(valory==0)
					elementoPrecoT.innerText = 0;
				else
					elementoPrecoT.innerText = (precoT*valorT)-precoT+80;
			});
			//Headset
			var valorH = 0;
			var precoH = 120;
			var elementoH = document.getElementById("z");
			var elementoPrecoH = document.getElementById("precoH");
			var botaoAumentaH = document.getElementById("aumentaH");
			var botaoDiminuiH = document.getElementById("diminuiH");
				
			botaoAumentaH.addEventListener("click", function(){
				elementoH.innerText = ++valorH;
				elementoPrecoH.innerText = precoH*valorH;
			});
			botaoDiminuiH.addEventListener("click", function(){
				elementoH.innerText = --valorH;
				if(valorH==0)
					elementoPrecoH.innerText = 0;
				else
					elementoPrecoH.innerText = (precoH*valorH)-precoH+120;
			});
			//Total
			var precoTotal = 0;

			var elementoTotal = document.getElementById("total");
			var botaoTotal = document.getElementById("finalizar");

			botaoTotal.addEventListener("click",function() {
				precoTotal = parseInt(100*valorM) + parseInt(80*valorT) + parseInt(120*valorH);
				elementoTotal.innerText = precoTotal;
			});
