pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

// we check to ensire that the headers we sent as request is returned as part of
// the response body. if you change the request headers, make sure to add them
// to the tests here
pm.test("sample request header should be returned in response body", function () {
    pm.response.to.have.jsonBody('headers.my-sample-header', 'Lorem ipsum dolor sit amet');
});