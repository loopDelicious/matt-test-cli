pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response has almost valid items", function () {
    pm.response.to.have.jsonBody('info.schema', 'https://schema.getpostman.com/json/collection/v2.0.0/collection.json')
        .and.to.have.jsonBody('item[0].name', 'A simple GET request')
        .and.to.have.jsonBody('item[1].name', 'A simple POST request');
});