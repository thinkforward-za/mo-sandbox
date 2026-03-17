resource "aws_s3_bucket" "mo-sandbox-s3" {
  bucket = "mo-sandbox-s3-bucket-ga"
}

resource "aws_s3_object" "index_html" {
  bucket = aws_s3_bucket.mo-sandbox-s3.bucket
  key    = "index.html"
  source = "index.html"
  content_type = "text/html"
  etag = filemd5("index.html")

}

resource "aws_s3_bucket_public_access_block" "react-app" {
  bucket = aws_s3_bucket.mo-sandbox-s3.id
  block_public_acls = true
  block_public_policy = true
  ignore_public_acls =  true
  restrict_public_buckets = true
}

data "aws_iam_policy_document" "react-bucket-policy" {
  statement {
    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.mo-sandbox-s3.arn}/*"]

    principals {
      type = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test = "StringEquals"
      variable = "AWS:SourceArn"
      values = [aws_cloudfront_distribution.cdn.arn] # Matches your Cloudfront distribution ARN
    }
  }
}

# Attach the generated policy JSON to the S3 bucket
resource "aws_s3_bucket_policy" "react-policy" {
  bucket = aws_s3_bucket.mo-sandbox-s3.id
  policy = data.aws_iam_policy_document.react-bucket-policy
}
