pm.test('response should be 200 or 302', function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 302]);
});

pm.test('the "foo1" cookie should not be present', function () {
    pm.expect(pm.cookies.toObject()).to.not.have.property('foo1');
});

pm.test('the "foo2" cookie should not be present', function () {
    pm.expect(pm.cookies.toObject()).to.not.have.property('foo2');
});

// response code could be either a 200 or a redirection based on the settings of 
// the http client. hence we need to handle both cases
pm.test('response body should be valid', function () {
    if (pm.response.code === 200) {
        pm.response.to.not.have.jsonBody('cookies.foo1');
        pm.response.to.not.have.jsonBody('cookies.foo2');
    }
    else {
        pm.response.to.have.body('Found. Redirecting to /cookies');
    }
});