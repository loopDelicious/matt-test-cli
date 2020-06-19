var _ = require('lodash');

pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has valid json body", function () {
    pm.response.to.have.jsonBody('delay');
});

// additional sanity tests
pm.test("request must have a valid delay", function () {
    pm.expect(Number(_.get(pm.request, 'url.path[1]'))).to.be.above(0).and.below(10);
});
pm.test("response should take more time than the delay specified", function () {
    pm.expect(pm.response.responseTime).to.be.above(Number(_.get(pm.request, 'url.path[1]')));
});