const { KhmerDate } = require('./lib');

const date = new KhmerDate(new Date('2022-03-03T21:12:15.330Z'))

console.log(date.getDate())