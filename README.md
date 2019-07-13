# GitHub Lambda Function

This repository contains an AWS Lambda function which helps automate securing a master branch.
It relies on webhook activation and it leaves an issue on the new repository detailing protections added to master branch.

This function is written in Node.js v10+

## How To:
To package this repository for deployment, do the following:
* Run the `package.sh` script, which does three things:
  * Removes preexisting packages.
  * Installs all necessary node modules.
  * Packages entire directory into a zip, ready for delivery.
* Take resulting zip and deploy to AWS Lambda for activation.
* Ensure that an environment variable named `TOKEN` is available to your Lambda function.
  * TOKEN is your granted bearer token to authorize your requests against the GitHub API.
  * Please save this variable in the format: `bearer 1234567890`.

## Enhancements:
This project was developed in a PoC fashion, as such it tis acknowledged that there are multiple rooms for improvements, including het following:
* Applying SOLID principles to functions defined
* Moving functions to a more suitable class
* Adding a service class for better separation of responsibility
* Programmatically validating or generating auth tokens
* Amongst a lot of others to make this solution more robust.

Please feel free to submit suggestions.
