pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has valid json body", function () {
    pm.response.to.have.jsonBody('deflated', true);
});

pm.test('response headers should indicate valid content encoding', function  () {
    pm.response.to.have.header('content-encoding', 'deflate')
        .and.have.header('content-type', 'application/json');
});

pm.test('requesting http client should accept compressed response', function () {
    pm.expect(pm.response.json()).to.have.nested.property('headers.accept-encoding')
        .and.to.match(/.*deflate.*/);
});