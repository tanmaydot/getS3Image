# AWS S3 File Downloader

This Node.js script allows you to download files from an AWS S3 bucket. It's particularly useful for retrieving images or videos from a specified S3 bucket based on the file key.

## Features

- Downloads files from an AWS S3 bucket
- Supports environment variable configuration for AWS credentials and bucket name
- Creates necessary directories for downloaded files

## Prerequisites

- Node.js installed on your system
- AWS account with access to S3 buckets
- AWS access key and secret key

## Installation

1. Clone this repository or download the script.
2. Navigate to the project directory.
3. Install the required dependencies:

   ```
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

   ```
   ACCESSKEY=your_aws_access_key
   SECRETKEY=your_aws_secret_key
   REGION=your_aws_region
   S3BUCKET=your_s3_bucket_name
   ```

   Replace the values with your actual AWS credentials and bucket name.

## Usage

1. Modify the `key` variable in the script to specify the file you want to download:

   ```javascript
   const key = "your_file_key_here";
   ```

2. Run the script:

   ```
   node index.js
   ```

3. Example of `S3BUCKET` URL format:  
   `https://s3.region.amazonaws.com/bucket-name/key-name`

## File Storage

Downloaded files are saved in a `downloads` directory within the project folder. The script automatically creates any necessary subdirectories based on the file key structure.

## Error Handling

The script includes basic error handling and will log any errors encountered during the download process to the console.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.
