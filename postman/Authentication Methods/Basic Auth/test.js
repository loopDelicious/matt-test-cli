pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response body has json saying 'authenticated'", function () {
    pm.response.to.have.jsonBody('authenticated', true);
});