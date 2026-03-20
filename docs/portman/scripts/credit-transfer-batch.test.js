tests["Has CreditTransfers"] = responseBody.has("CreditTransfers");
var jsonData = JSON.parse(responseBody);
tests["Has id"] = jsonData.CreditTransfers[0].id;
tests["Has pmtinfid"] = jsonData.CreditTransfers[0].pmtinfid;
tests["Has entries"] = jsonData.CreditTransfers[0].entries;
