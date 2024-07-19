require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const accessKey = process.env.ACCESSKEY
const secretKey = process.env.SECRETKEY
const awsRegion = process.env.REGION
const s3Bucket = process.env.S3Bucket

AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: awsRegion,
});

const s3 = new AWS.S3();

const key = 'your_file_key_here';

let bucketName = s3Bucket;

const downloadPath = path.join(__dirname, 'downloads', key);

const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

const getObjectFromS3 = async () => {
    try {
        const params = {
            Bucket: bucketName,
            Key: key,
        };

        const data = await s3.getObject(params).promise();

        ensureDirectoryExistence(downloadPath);
        
        fs.writeFileSync(downloadPath, data.Body);

        console.log('File downloaded successfully:', downloadPath);
    } catch (err) {
        console.error('Error getting object from S3:', err.message);
        throw err
    }
};

// Call the function
getObjectFromS3();
