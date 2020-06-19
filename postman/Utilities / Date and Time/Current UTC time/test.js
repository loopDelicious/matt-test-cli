pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response time matches server response 'date' header", function () {
    pm.expect(pm.response.text()).to.eql(pm.response.headers.get('date'))
});