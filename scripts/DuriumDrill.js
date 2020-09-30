const drill = extendContent(Drill, "DuriumDrill", {
    drawLayer: function(tile){
 rot = tile.entity.getRot()
 Draw.rect(Core.atlas.find(this.name+"-rotatorr"), tile.drawx()+8, tile.drawy()-8, rot*5.7);
    Draw.rect(Core.atlas.find(this.name+"-rotatorr"), tile.drawx()+8, tile.drawy()+8, rot*6);
    Draw.rect(Core.atlas.find(this.name+"-rotatorr"), tile.drawx()-8, tile.drawy()+8, rot*6.2);

 Draw.color(tile.entity.liquids.current().color);
 Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
 Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
 Draw.color();

 Draw.rect(Core.atlas.find(this.name + "-top"),  tile.drawx(), tile.drawy());
 
},

update(tile){
this.super$update(tile);

if(tile.entity.power.status >= 1 && tile.entity.liquids.get(this.consumes.get(ConsumeType.liquid).liquid) / this.liquidCapacity >= 0.9){
tile.entity.updateRot(tile);
}
},
generateIcons: function(){
	return [
		Core.atlas.find(this.name),
		Core.atlas.find(this.name + "-rotatorss"),
		Core.atlas.find(this.name + "-top"),
	]},
});
drill.layer = Layer.turret;
drill.hasPower = true;
drill.entityType = prov(() => extend(Drill.DrillEntity, {
    
_rot: 0,
updateRot(tile){

this._rot++
},
getRot(){
    
return this._rot

},
}))