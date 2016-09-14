module.exports = exports = EntityManager;

function EntityManager(width, height, cellSize) {
	this.worldWidth = width;
	this.worldHeight = height;
	this.cellSize = cellSize;
	this.widthInCells = Math.ceil(width/cellSize);
	this.heightInCells = Meth.ceil(height/cellSize);
	this.numberOfCells = this.widthInCells * this.heightInCells;
	this.cells = [];
	for(i = 0; i < this.numberOfCells; i++) {
		this.cells[i] = [];
	}
}

EntityManager.prototype.addEntity = function(entity) {
	var left = Math.floor(entity.x / this.cellSize);
	var right = Math.ceil((entity.x + entity.width) / this.cellSize);
	var top = Math.floor(entity.y / this.cellSize);
	var bottom = Math.ceil((entity.y + entity.height) / this.cellSize);
	for(x = left; x <= right; x++) {
		for(y = top; y <= bottom; y++) {
			this.cells[(y*this.widthInCells) + x].push(entity);
			if(!entity.cells) entity.cells = [];
			entity.cells.push({x: x, y: y});
		}
	}
}