# Cloud Portfolio Project

- This is a simple Node.js app that serves my portfolio HTML file on Amazon Web Services (AWS), making it a great way to test and experiment with cloud deployments.

## Tech Stack Highlights

 1. HTML & CSS: User-friendly and responsive front-end.
 2. Node.js: Backend logic and contact form handling.
 3. MongoDB: Database for storing contact form data.
 4. GitHub: Repository hosting
 5. AWS EC2: Hosting the application for global access.
    
## Features
- HTML and CSS for the user interface.
- A Node.js backend to handle form submissions and data storage.
- MongoDB to store the data from the contact form.
- Hosted on AWS EC2 for easy access and public availability.

- After launching and connecting to your AWS EC2 instance, follow the following steps:

## Step 1: Installing Node.js and npm on EC2
- Install nvm by typing the following on the EC2 command line:
  ```bash
    sudo su -
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    ```

- Activate nvm by typing the following command on the command line:
  ```bash
    . ~/.nvm/nvm.sh
    ```

- Install Node.js by typing the following on the command line:
  ```bash
    nvm install node
    ```
- Verify that node and npm are installed and running correctly by typing the following on the command line:
  ```bash
    node -v
    npm -v
    ```

## Step 2: Installing Git and cloning repository from GitHub to your EC2 instance
- Install git by running below commands on the command line:
  ```bash
    yum update -y
    yum install git -y
    ```

- Verify if git is installed by running this command on the command line:
  ```bash
    git –version
    ```

- To clone the repository from Github use the command below:
  ```bash
    git clone https://github.com/oyierbilly/Portfolio-Project.git
    ```
  
- Confirm if your repository has been cloned by using the command below:
    ```bash
    ls -ltr
    ```

Navigate to the directory and start the server by using the following commands:
  ```bash
    cd Portfolio-Project/
    npm start
    
