# GitHub Lambda Function

This repository contains an AWS Lambda function which helps automate securing a master branch.
It relies on webhook activation and it leaves an issue on the new repository detailing protections added to master branch.

This function is written in Node.js v10+

## How To:
To package this repository for deploy, do the following:
* Run the `package.sh` script, which does three things:
** Removes preexisting packages.
** Installs all necessary node modules.
** Packages entire directory into a zip, ready for delivery.
* Take resulting zip and deploy to AWS Lambda for activation.
* Ensure that an environment variable named `TOKEN` is available in your Lambda.
** TOKEN is your granted bearer token to authorize your requests against the GitHub API.
** Please save in the format of `bearer 1234567890`.
