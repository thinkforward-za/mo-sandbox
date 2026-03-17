output "cloudfront_url" {
    description = "The Cloudfront URL to access the React app"
    value = "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

output "s3_bucket_name" {
    description = "The name of the S3 bucket hosting the react app"
  value = aws_s3_bucket.react_app.bucket
}