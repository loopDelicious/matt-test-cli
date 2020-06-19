pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should say timestamp is not after target", function () {
    pm.response.to.have.jsonBody('after', false);
});