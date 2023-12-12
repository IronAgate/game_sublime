
class Panel {
	
	constructor(resX, resY) {
		
		this.resX = resX;
		this.resY = resY;
		
		this.root = document.getElementById("game_panel");
		
		this.root.style.aspectRatio = resX/resY;
		
		this.canvas = document.createElement("canvas");
		this.canvas.style.display = "none";
		
		this.canvas.width = resX;
		this.canvas.height = resY;
		
		this.canvas.style.width = "100%";
		this.canvas.style.height = "100%";
		this.root.appendChild(this.canvas);
		
		
		this.canvas.style.backgroundColor = "red"; //t
		
		this.ctx = this.canvas.getContext("2d");
		this.ctx.fillRect(10, 10, 10,10);
		
		
		
		const btn = document.createElement("button");
		btn.textContent = "[start]";
		btn.style.margin = "auto";
		btn.style.width = "100%";
		btn.style.height = "100%";
		
		const c = this.canvas;
		
		btn.onclick = function() {
			c.style.display = "block";
			this.style.display = "none";
			
			
			
			
			function temp() {
				let x = Number(c.style.width.slice(0,-1));
				c.style.width = String(x - 1) + '%';
			}
			
			//setInterval(temp, 1000);
			
		}

		this.root.appendChild(btn);
		//num of game pixels that should fit within the panel
		//this.zoom = zoom;
		
		
		
	}
}

let game_panel = new Panel(500,250);

function test() {
	game_panel.ctx.fillRect(50, 70, 70, 70);
}