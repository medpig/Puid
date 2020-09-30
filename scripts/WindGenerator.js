const windmill = extendContent(Wall, "LugelWindGenerator", {
    drawLayer: function(tile){
        Draw.rect(Core.atlas.find(this.name+"-rotator"), tile.drawx(), tile.drawy(), Time.time()*4);
    }, 

   
    getPowerProduction(tile){
        return 14;
    },
    
    generateIcons: function(){

	return [

		Core.atlas.find(this.name),
		Core.atlas.find(this.name + "-rotator"),
		
	];},
});
windmill.layer = Layer.turret;
windmill.hasPower = true;
windmill.outputsPower = true;
