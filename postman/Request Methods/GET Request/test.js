var common = require('../../common')
var uniq = require('uniq')


pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response body has json with request queries", function () {
    pm.response.to.have.jsonBody('args.foo1', 'bar1')
        .and.have.jsonBody('args.foo2', 'bar2');
});

pm.test("this is the GREATEST test", function () {
    pm.expect(true, 'should work').to.be.ok;
})

common.helloWorld()
let fruits = ["lemon", 'cherry', 'cherry', 'apple']
console.log(uniq(fruits))