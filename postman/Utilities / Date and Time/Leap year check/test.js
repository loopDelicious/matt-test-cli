pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should say timestamp is within leap year", function () {
    pm.response.to.have.jsonBody('leap', true);
});