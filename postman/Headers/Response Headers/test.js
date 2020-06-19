pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has the headers sent as part of request query", function () {
    pm.response.to.have.header('foo1', 'bar1')
        .and.have.header('foo2', 'bar2');
});

pm.test("sample request param should be returned in response body", function () {
    pm.response.to.have.jsonBody('foo1', 'bar1')
        .and.have.jsonBody('foo2', 'bar2');
});