terraform {
  backend "s3" {
    bucket         = "mo-sandbox-s3-bucket-ga"
    key            = "./state/terraform.tfstate"
    region         = "us-east-1"
    skip_credentials_validation = true
  }
}