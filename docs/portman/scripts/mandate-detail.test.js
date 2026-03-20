pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    var data = JSON.parse(responseBody);
    tests["Body has Mndt"] = data.Mndt;
    tests["Body has MndtId"] = data.Mndt.MndtId;
    tests["Body has SplmtryData"] = data.Mndt.SplmtryData;
});
