tests["response code is 200"] = responseCode.code === 200;
tests["body contains authenticated"] = responseBody.has("authenticated");