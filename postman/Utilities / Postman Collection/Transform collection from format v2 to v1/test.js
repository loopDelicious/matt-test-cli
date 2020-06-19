pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has almost valid items", function () {
    pm.response.to.have.jsonBody('folders', [])
        .and.to.have.jsonBody('order')
        .and.to.have.jsonBody('requests[0].name', 'A simple GET request')
        .and.to.have.jsonBody('requests[1].name', 'A simple POST request');
});