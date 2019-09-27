var Gosu = require('./api');
var data = [];
for (let index = 0; index < 1000; index++) {
    let person = new Gosu ('Dendi' + index , 0 +index);
    data.push(person);
}
module.exports = data