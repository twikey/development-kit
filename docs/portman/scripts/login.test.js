pm.test("Status code is 200", function () {
    pm.response.to.not.be.error;

    var data = pm.response.json();
    pm.collectionVariables.set("Authorization", data.Authorization);

    tests["Body has Authorization"] = responseBody.has("Authorization");
    tests["Authorization Header is present"] = postman.getResponseHeader("Authorization");
});
