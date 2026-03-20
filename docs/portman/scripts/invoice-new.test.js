pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    var data = JSON.parse(responseBody);
    tests["Invoice has id"] = data.id;
});
