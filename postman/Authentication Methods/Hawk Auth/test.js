pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response body has json saying passed 'status'", function () {
    pm.response.to.have.jsonBody('status', 'pass');
});