pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response body has json with request body", function () {
    pm.response.to.have.jsonBody('data', 
        'This is expected to be sent back as part of response body.');
});