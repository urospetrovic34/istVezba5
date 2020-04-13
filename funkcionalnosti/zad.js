"use strict";
const lista = require("../lista/lista.js")

module.exports.sveKnjige = function sveKnjige(){
	return lista
}
module.exports.addKnjiga = function addKnjiga(id, naziv, autor){
	lista.push({"id":id,"naziv":naziv,"autor":autor})
}
module.exports.getKnjiga = function getKnjiga(id){
	return lista.find(item => item.id === id)
}
module.exports.postaviAutora = function postaviAutora(naziv, autor){
	lista.forEach(function(el){
		if(el.naziv===naziv){
			el.autor=autor
		}
	})
}
module.exports.deleteKnjiga = function deleteKnjiga(id){
	delete lista[id-1]	
}
module.exports.getKnjigaByAuthor = function getKnjigaByAuthor(autor){
	return lista.find(item => item.autor === autor)
}
