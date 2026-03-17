# ------------------------
# Cloudfront origin access control (OAC)
# ------------------------
resource "aws_cloudfront_origin_access_control" "oac" {
    name = "react-app-oac"
    description = "OAC for React app s3 bucket"
    origin_access_control_origin_type = "s3"
    signing_behavior = "always"
    signing_protocol = "sigv4"
}



# ------------------------
#   Cloudfront distribution 
# ------------------------
resource "aws_cloudfront_distribution" "cdn" {
    enabled = true
    default_root_object = "index.html"

    origin {
      domain_name = aws_s3_bucket.mo-sandbox-s3.bucket_regional_domain_name
      origin_id = "s3-react-app"
      origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    }

    default_cache_behavior {
      target_origin_id = "s3-react-app"
      allowed_methods = [ "GET", "HEAD" ]
      cached_methods = [ "GET", "HEAD" ]

      viewer_protocol_policy = "redirect-to-https"

      forwarded_values {
        query_string = false
        cookies {
          forward = "none"
        }
      }

    min_ttl = 0
    default_ttl = 60
    max_ttl = 3600

    }

    restrictions {
      geo_restriction {
        restriction_type = "none"
      }
    }

    viewer_certificate {
      cloudfront_default_certificate = true # free SSL cert from cloudfront
    }
}