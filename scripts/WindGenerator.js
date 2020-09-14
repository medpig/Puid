var i=2*7
const windmill = extendContent(Wall, "LugelWindGenerator", {
    drawLayer: function(tile){
        Draw.rect(Core.atlas.find(this.name+"-rotator"), tile.drawx(), tile.drawy(), Time.time()*-4);
    }, 
   
    getPowerProduction(tile){
        return i;
    }
});
windmill.layer = Layer.turret;
windmill.hasPower = true;
windmill.outputsPower = true;
