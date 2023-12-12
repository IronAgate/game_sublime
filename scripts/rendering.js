
class Panel {
	constructor(divid, resX, resY, startup) {
		this.root = document.getElementById(divid);
		this.resX = resX;
		this.resY = resY;
		
		this.root.style.aspectRatio = resX/resY;
		this.root.style.position = "relative"; //for layering: https://www.shecodes.io/athena/50922-how-to-make-an-absolute-box-responsive-with-css#:~:text=To%20make%20an%20absolute%20position%20box%20responsive%2C%20you%20should%20use,parent%20container%20and%20adjust%20accordingly.
		
		this.bgCanvas = document.createElement("canvas");
		this.bgCanvas.style.display = "none";
		this.bgCanvas.width = resX;
		this.bgCanvas.height = resY;
		this.bgCanvas.style.width = "100%";
		this.bgCanvas.style.height = "100%";
		this.bgCanvas.style.zIndex = 0; //for layering
		this.bgCanvas.style.position = "absolute"; //for layering
		this.root.appendChild(this.bgCanvas);

		this.bgCtx = this.bgCanvas.getContext("2d");
		this.bgCtx.imageSmoothingEnabled = false;
		
		this.canvas = document.createElement("canvas");
		this.canvas.style.display = "none";
		this.canvas.width = resX;
		this.canvas.height = resY;
		this.canvas.style.width = "100%";
		this.canvas.style.height = "100%";
		this.canvas.style.zIndex = 3;
		this.canvas.style.position = "absolute";
		this.root.appendChild(this.canvas);
		
		this.ctx = this.canvas.getContext("2d");
		this.ctx.imageSmoothingEnabled = false;
		
		const btn = document.createElement("button");
		btn.textContent = "start";
		btn.style.width = "100%";
		btn.style.height = "100%";
		const c = this.canvas; //simplifies func below
		const bgc = this.bgCanvas;
		btn.onclick = 
			function() {
				bgc.style.display = "block";
				c.style.display = "block";
				this.style.display = "none";
				
				startup();
			}
		this.root.appendChild(btn);	
	}
	set_background(bgImgId) {
		this.bgCtx.drawImage(document.getElementById(bgImgId), 0, 0, this.resX, this.resY);
		//rethink: setting color, clearing last bg, color behind transparent bg, etc
	}
}

class Sprite {
	/*
	knows
		resolution/size X,Y
			store as game pixels or canvas?
			if game, store ratio?
		position X,Y
		canvas
	does
		draws to canvas at pos+size
			undraws prev? or at canvas lvl?
		visual effects, if any: shrink, stretch, etc
		?sounds
	*/
	/*
	constructor(resX, resY) {
		this.resX = resX;
		this.resY = resY;
	}
	*/
}

let game_panel = new Panel("game_panel", 500,500);

game_panel.ctx.fillRect(10, 10, 50,50);
let img = document.getElementById("img_slime");
game_panel.ctx.drawImage(img, 10,10, 50,50);

game_panel.set_background("img_slime");
game_panel.bgCanvas.style.backgroundColor = "red";