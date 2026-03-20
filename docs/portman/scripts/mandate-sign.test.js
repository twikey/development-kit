var jsonData = JSON.parse(responseBody);
tests["Has ok"] = jsonData.Msg === "ok";
tests["Has sms"] = responseBody.has("MndtId");
