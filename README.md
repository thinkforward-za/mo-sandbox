# mo-sandbox

MO Sandbox Terraform Project
This project creates an AWS S3 bucket using Terraform and deploys it via GitHub Actions.

Setup
Ensure you have AWS credentials.

Push to GitHub.

Set secrets in GitHub repo.

Push to main branch to trigger deployment.

Terraform AWS S3 Bucket
This repository contains Terraform configuration to create an AWS S3 bucket and deploy it using GitHub Actions.

Prerequisites
AWS Account with appropriate permissions

GitHub Repository

Setup
Clone this repository.

Configure AWS credentials locally for testing (optional).

Push the code to GitHub.

In your GitHub repository, go to Settings > Secrets and variables > Actions, and add:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

Push changes to the main branch to trigger the deployment.

Workflow
The GitHub Actions workflow will:

Run on pushes to main branch

Validate Terraform code

Plan the changes

Apply the changes automatically
