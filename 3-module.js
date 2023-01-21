// modules = Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flavour')
require('./7-mind_grenade')


console.log(data);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)