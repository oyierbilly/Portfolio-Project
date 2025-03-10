#Cloud Portfolio Project

- This is a simple Node.js app that serves my portfolio HTML file on Amazon Web Services (AWS), making it a great way to test and experiment with cloud deployments.

##Features
- HTML and CSS for the user interface (UI).
- A Node.js backend to handle form submissions and data storage.
- MongoDB to store the data from the contact form.
- Hosted on AWS EC2 for easy access and public availability.

After launching and connecting to your AWS EC2 instance, follow the following steps:

##Step 1: Installing NodeJS and NPM on EC2
Install nvm by typing the following on the EC2 command line.
sudo su -
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

Activate nvm by typing the following on the command line.
. ~/.nvm/nvm.sh

Install the Node.js by typing the following on the command line.
nvm install node

Verify that node and npm are installed and running correctly by typing the following on the command line:
node -v
npm -v

##Step 2: Installing Git and cloning repository from GitHub to your EC2 instance
Install git by running below commands in the command line:
yum update -y
yum install git -y 

Verify if git is installed by running this command in the command line:
git –version

Run below command to clone the repository from Github:
git clone https://github.com/oyierbilly/Portfolio-Project.git

Confirm if your repository has been cloned by using the command below:
ls -ltr

Navigate to the directory and start the server by using the following commands:
cd Portfolio-Poject/
npm start
