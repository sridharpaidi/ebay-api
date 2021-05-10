var aws = require('aws-sdk');

console.log(aws.config.credentials.accessKeyId);
console.log(aws.config.credentials.secretAccessKey);
