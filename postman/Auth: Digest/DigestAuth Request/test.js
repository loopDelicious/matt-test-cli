tests["response code is 401"] = responseCode.code === 401;
tests["response has WWW-Authenticate header"] = (postman.getResponseHeader('WWW-Authenticate'));

var authenticateHeader = postman.getResponseHeader('WWW-Authenticate'),
    realmStart = authenticateHeader.indexOf('"',authenticateHeader.indexOf("realm")) + 1 ,
    realmEnd = authenticateHeader.indexOf('"',realmStart),
    realm = authenticateHeader.slice(realmStart,realmEnd),
    nonceStart = authenticateHeader.indexOf('"',authenticateHeader.indexOf("nonce")) + 1,
    nonceEnd = authenticateHeader.indexOf('"',nonceStart),
    nonce = authenticateHeader.slice(nonceStart,nonceEnd);
    
postman.setGlobalVariable('echo_digest_realm', realm);
postman.setGlobalVariable('echo_digest_nonce', nonce);