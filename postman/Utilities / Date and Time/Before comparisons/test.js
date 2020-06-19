pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should say timestamp is before target", function () {
    pm.response.to.have.jsonBody('before', true);
});