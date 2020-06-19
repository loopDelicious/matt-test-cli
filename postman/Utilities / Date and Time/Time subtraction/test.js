pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should return the subtracted years", function () {
    pm.response.to.have.jsonBody('difference', 'Mon Oct 10 1966 00:00:00 GMT+0000');
});