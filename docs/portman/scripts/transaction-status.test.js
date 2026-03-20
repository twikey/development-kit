var data = JSON.parse(responseBody);
tests["Body has Entries"] = data.Entries;
tests["Transaction has id"] = data.Entries[0].id;
tests["Transaction has amount"] = data.Entries[0].amount;
tests["Transaction has state"] = data.Entries[0].state;
