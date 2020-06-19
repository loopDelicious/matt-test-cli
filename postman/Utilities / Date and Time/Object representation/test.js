pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

pm.test("response json should return the date components", function () {
    pm.expect(pm.response.json()).to.eql({
        "years": 2016,
        "months": 9,
        "date": 10,
        
        "hours": 0,
        "minutes": 0,
        "seconds": 0,
        "milliseconds": 0
    });
});