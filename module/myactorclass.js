export  class  ActorMythras extends  Actor {
  prepareData() {
    super.prepareData();
    const  actorData = this.data;
		const  data = actorData.data;  
		if (actorData.type === "character") {
			data.attributes.mov.value = Number(6); 
			data.attributes.acc.value = Math.ceil((Number(data.characteristics.int.value)+Number(data.characteristics.dex.value))/12); 
			data.attributes.dm.value = Math.ceil(Number(0)); 
			data.attributes.expm.value = Math.floor((Number(data.characteristics.cha.value)-1)/6)-1; 
			data.attributes.cr.value = Math.ceil(Number(data.characteristics.con.value)/6); 
			data.attributes.ini.value = Math.ceil((Number(data.characteristics.int.value)+Number(data.characteristics.dex.value))/2); 
			data.attributes.inip.value = Math.ceil(Number(data.life.left_leg.enc)+Number(data.life.right_leg.enc)+Number(data.life.abdomen.enc)+Number(data.life.chest.enc)+Number(data.life.left_arm.enc)+Number(data.life.right_arm.enc)+Number(data.life.head.enc)/5); 
			data.attributes.lp.value = Math.ceil(Number(data.characteristics.pow.value)/6);
			if (data.attributes.lp.current === 'calculate') {
					data.attributes.lp.current = data.attributes.lp.value;
			}
			data.attributes.mp.value = Number(data.characteristics.pow.value); 
			if (data.attributes.mp.current === 'calculate') {
					data.attributes.mp.current = data.attributes.mp.value;
			}
			data.life.left_leg.value = Math.ceil((Number(data.characteristics.con.value)+Number(data.characteristics.siz.value))/5);
			if (data.life.left_leg.current === 'calculate') {	
					data.life.left_leg.current = data.life.left_leg.value;
			}
			data.life.right_leg.value = data.life.left_leg.value ;
			if (data.life.right_leg.current === 'calculate') {
					data.life.right_leg.current = data.life.right_leg.value;
			}
			data.life.head.value = data.life.left_leg.value ;
			if (data.life.head.current === 'calculate') {
					data.life.head.current = data.life.head.value;
			}
			data.life.abdomen.value = data.life.left_leg.value+1 ;
			if (data.life.abdomen.current === 'calculate') {
					data.life.abdomen.current = data.life.abdomen.value;
			}
			data.life.chest.value = data.life.left_leg.value+2 ;
			if (data.life.chest.current === 'calculate') {
					data.life.chest.current = data.life.chest.value;
			}
			data.life.left_arm.value = data.life.left_leg.value-1 ;
			if (data.life.left_arm.current === 'calculate') {
					data.life.left_arm.current = data.life.left_arm.value;
			}
			data.life.right_arm.value = data.life.left_arm.value ;
			if (data.life.right_arm.current === 'calculate') {
					data.life.right_arm.current = data.life.right_arm.value;
			}
		}
  }
}
