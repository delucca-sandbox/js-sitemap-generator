const AWS = require('aws-sdk');
import config from '../config';

const isProduction = process.env.NODE_ENV === 'production';

AWS.config.update(config.aws);
const s3 = new AWS.S3();

s3.createBucket({Bucket: config.aws.bucketSlug})
  .promise()
  .then(console.log)
  .catch( error => {
    if(error.code === 'BucketAlreadyOwnedByYou') return;

    return sentry(error);
  })

const uploadSitemap = (fileBody) =>
  s3.upload({
    Bucket: config.aws.bucketSlug,
    Body: fileBody,
    Key: isProduction ? 'sitemap.xml' : 'sitemap.staging.xml',
    ContentType: 'application/xml',
    ACL: 'public-read',
  })
    .promise()

export default {
  uploadSitemap,
};
