const AWS = require('aws-sdk');

const RoleArn = `arn:aws:iam::${process.env.ACCOUNT_ID}:role/CodeStarWorker-ebay-api-ToolChain`;

console.log(RoleArn);

const sts = new AWS.STS();

sts.assumeRole({ RoleArn, RoleSessionName: 'ebay-api' }, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    // successful response
    AWS.config.update({
      accessKeyId: data.Credentials.AccessKeyId,
      secretAccessKey: data.Credentials.SecretAccessKey,
      sessionToken: data.Credentials.SessionToken,
    });

    console.log(AWS.config);
    console.log(AWS.config.credentials.accessKeyId);
    console.log(AWS.config.credentials.secretAccessKey);
  }
});
