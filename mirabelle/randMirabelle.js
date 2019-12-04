'use strict'

const mirabelle = require('./mirabellList.js')


Array.prototype.random = function(){
  const position = Math.floor(Math.random() * this.length)
  return this[position]
}

let rand = mirabelle.random();
console.log(rand)
return rand