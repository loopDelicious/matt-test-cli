pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should say timestamp is not between start and end", function () {
    pm.response.to.have.jsonBody('between', false);
});