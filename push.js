var push = require('web-push');

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
    publickey: 'BAWJwAw-PEjxPuv8esF-2cVWfrLXyCL4CBMh3cuuu4J4P6ZHUYT_VL5wM9x0-BkBH6w3L0RV6rVHaDqX6Ak-JE8',
    privatekey: 'kzrC_7IyB_Efd8a_taNLhdmF_tF_n3SlLmLxFO_mF_M'
}

push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey);
let sub = {};

push.sendNotification(sub, 'Testing this');