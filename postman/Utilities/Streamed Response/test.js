pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has chunked transfer encoding header", function () {
    pm.response.to.have.header('transfer-encoding', 'chunked');
});