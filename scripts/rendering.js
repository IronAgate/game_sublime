
class Panel {
	constructor(divid, resX, resY, startup) {
		this.root = document.getElementById(divid);
		this.resX = resX;
		this.resY = resY;
		
		this.root.style.aspectRatio = resX/resY;
		
		this.canvas = document.createElement("canvas");
		this.canvas.style.display = "none";
		this.canvas.width = resX;
		this.canvas.height = resY;
		this.canvas.style.width = "100%";
		this.canvas.style.height = "100%";
		this.root.appendChild(this.canvas);
		
		this.canvas.style.backgroundColor = "#f00"; //t
		
		this.ctx = this.canvas.getContext("2d");
		this.ctx.imageSmoothingEnabled = false;
		
		this.ctx.fillRect(10, 10, 75,75);
		
		const btn = document.createElement("button");
		btn.textContent = "start";
		btn.style.width = "100%";
		btn.style.height = "100%";
		const c = this.canvas; //simplifies func below
		btn.onclick = 
			function() {
				c.style.display = "block";
				this.style.display = "none";
				
				startup();
			}
		this.root.appendChild(btn);	
	}
}

let game_panel = new Panel("game_panel", 500,500);

let img = document.getElementById("imgSlime");
game_panel.ctx.drawImage(img, 0,0, 50,50);