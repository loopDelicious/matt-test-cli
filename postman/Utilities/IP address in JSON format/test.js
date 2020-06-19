pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has valid json body", function () {
    pm.response.to.have.jsonBody('ip');
});

pm.test("response must return a valid ip address", function () {
    pm.expect(pm.response.json().ip).to
        // a really gnarly regular expression to ensure that ip address is in correct format
        .match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
});