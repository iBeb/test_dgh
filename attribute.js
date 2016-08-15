
/**
* Task A.1
*/
var Attribute = [{
	identifier:"a",
	qualifier:"b",
	label:"c",
	ownerIds:[3,4]	
},{
	identifier:"d",
	qualifier:"e",
	label:"f",
	ownerIds:[1,2]	
},{
	identifier:"g",
	qualifier:"h",
	label:"i",
	ownerIds:[5,6]	
}];

var owners_array = [{ownerId:1, name: "ab"}, 
										{ownerId:2, name: "cd"},
										{ownerId:3, name: "ef"}, 
										{ownerId:4, name: "gh"}];

/**
* @param {number[]} 		ownerIds
* @return {Attribute[]) attributes
*/

/**
* Task A.2
*/
var att_len = Attribute.length;
function filter(){
	var attributes = [];
	for (var i = 0; i <= att_len - 1; i++) {
		attributes.push(Attribute[i].identifier);
		attributes.push(Attribute[i].qualifier);
		attributes.push(Attribute[i].label);
		attributes.push(Attribute[i].ownerIds);
	};
	return attributes;
}

var list = filter();
console.log(list);

/**
* Task A.Bonus
*/
function filter_owner(owner_id){
	var attributes = [];
	var att_ownerIds_len;
	for (var i = 0; i <= att_len - 1; i++) {
		att_ownerIds_len = Attribute[i].ownerIds.length;
		for(var j = 0; j <= att_ownerIds_len - 1; j++){
			if(Attribute[i].ownerIds[j] == owner_id) {
				attributes.push(Attribute[i].identifier);
				attributes.push(Attribute[i].qualifier);
				attributes.push(Attribute[i].label);
				attributes.push(Attribute[i].ownerIds);
			}			
		}
	}
	return attributes;
}

var owner_atts = filter_owner(1);
console.log(owner_atts);

/**
* Task A.Super Bonus
*/
function filter_owners(owner_ids){
	var attributes = [];
	var att_ownerIds_len;
	var owners_len = owner_ids.length;
	for (var i = 0; i <= att_len - 1; i++) {
		att_ownerIds_len = Attribute[i].ownerIds.length;
		for(var j = 0; j <= att_ownerIds_len - 1; j++){
			for(var k = 0; k <= owners_len - 1; k++){
				if(Attribute[i].ownerIds[j] == owner_ids[k]) {
					attributes.push(Attribute[i].identifier);
					attributes.push(Attribute[i].qualifier);
					attributes.push(Attribute[i].label);
					attributes.push(Attribute[i].ownerIds);
				}			
			}
		}
	}
	return attributes;
}

var owner_ids = [4,5];
var owners_atts = filter_owners(owner_ids);
console.log(owners_atts);
