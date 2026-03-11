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