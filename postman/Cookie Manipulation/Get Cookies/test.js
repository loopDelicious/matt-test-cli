pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test('the "foo1" cookie has correct value', function () {
    pm.expect(pm.cookies.toObject()).to.have.property('foo1', 'bar1');
});

pm.test('the "foo2" cookie has correct value', function () {
    pm.expect(pm.cookies.toObject()).to.have.property('foo2', 'bar2');
});

pm.test('response body should be valid', function () {
    pm.response.to.have.jsonBody('cookies.foo1', 'bar1');
    pm.response.to.have.jsonBody('cookies.foo2', 'bar2');
});