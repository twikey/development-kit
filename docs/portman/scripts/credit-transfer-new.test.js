var jsonData = JSON.parse(responseBody);
tests["Has id"] = jsonData.Entries[0].id;
tests["Has iban"] = jsonData.Entries[0].iban;
tests["Has message"] = jsonData.Entries[0].msg === "test credit transfer";
