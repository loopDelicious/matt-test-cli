pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has valid json body", function () {
    pm.response.to.have.jsonBody('status');
});

// additional sanity tests
pm.test("status in response body must match the one in request", function () {
    pm.response.to.have.jsonBody('status', Number(_.get(pm.request, 'url.path[1]')));
});