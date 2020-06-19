pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should return the beginning of month", function () {
    pm.response.to.have.jsonBody('start', 'Sat Oct 01 2016 00:00:00 GMT+0000');
});