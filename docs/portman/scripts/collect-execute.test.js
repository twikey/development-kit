tests["Status code is 200"] = responseCode.code === 200;
var jsonData = JSON.parse(responseBody);
tests["Has rcurMsgId"] = responseBody.has("rcurMsgId");
