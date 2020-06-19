pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response body has json with form data", function () {
    pm.response.to.have.jsonBody('form.foo1', 'bar1')
        .and.have.jsonBody('form.foo2', 'bar2');
});