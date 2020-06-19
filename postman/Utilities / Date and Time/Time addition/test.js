pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should return the added years", function () {
    pm.response.to.have.jsonBody('sum', 'Sat Oct 10 2116 00:00:00 GMT+0000');
});