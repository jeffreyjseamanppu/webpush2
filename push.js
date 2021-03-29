var push = require('web-push');

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
    publickey: 'BAWJwAw-PEjxPuv8esF-2cVWfrLXyCL4CBMh3cuuu4J4P6ZHUYT_VL5wM9x0-BkBH6w3L0RV6rVHaDqX6Ak-JE8',
    privatekey: 'kzrC_7IyB_Efd8a_taNLhdmF_tF_n3SlLmLxFO_mF_M'
}

//chrome browser
/*
push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey);
let sub = {
    endpoint:
      'https://fcm.googleapis.com/fcm/send/d__zTvVuEXw:APA91bHEcOAMUgTwlr5bHHz_wxOIXiam4xpEIttAMJyW8JXbXqnn6nJsnT0eKerg6uzqeOltIp3UHnKkphoWiHK2yX3qNY97B1UNt5B9_m550BP-u2fBxk3JQptUvUBTuE_qTZ2d-DCy',
    expirationTime: null,
    keys: {
      p256dh:
        'BA9g3XSsyZGZBeTwQJ1kKUdTXzyn46NgjOhT_5KL_xblkCArJCwD05l4YwuJC1n8c2jjIMpYa5e3vGna2J_Kwsw',
      auth: '5NsEh20fxb4Exkg6EZMwYA'
    }
  };

push.sendNotification(sub, 'Testing this');
*/

//firefox browser
push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey);
let sub = {
    endpoint:
      'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgYQTORhyqWe5qqmf5IlDO3BPeYn5KXPtels8f6at9YvkOurT-DDxqiITqDUwLE',
    expirationTime: null,
    keys: {
      p256dh:
        'BOFxuw-5qlvMeEDCRjLb1VDJW-A_Ov2j44clbRVEFAaMqUAUtewRHycibDpi_coSzvIgBaQkrS37Rph2XYaIjoI',
      auth: 'o19XplbnGR9r2a7FfrPsZg'
    }
  };

push.sendNotification(sub, 'Testing this');