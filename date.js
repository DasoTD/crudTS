var now = new Date();
console.log(now);
 var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

 console.log(utc);

 var date = new Date();
 var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())
 var dd =  new Date(now_utc)
 console.log(dd);

 var isoDate = new Date().toISOString();
 console.log(isoDate);

 var dt = new Date();
 var tc = new Date(dt.toUTCString().slice(0, -4));
 var ct = dt.toUTCString();
 console.log(tc);
 console.log(ct);