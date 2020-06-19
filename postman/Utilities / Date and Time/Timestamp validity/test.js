pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should say whether request query time is valid", function () {
    pm.response.to.have.jsonBody('valid', true);
});