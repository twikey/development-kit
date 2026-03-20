pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    var data = JSON.parse(responseBody);
    tests["Body has GrpHdr"] = data.GrpHdr;
    tests["Body has Messages"] = data.Messages;
});
