1. go to project folder (by cd)
2. type '''npm init -y'''
3. open package.json
4. update '''type:module'''
5. install nodemon '''npm i nodemon -D'''
6. update script in package.json
'''
"scripts": {
    "start": "node app.js",
    "dev" : "nodemon prog7"
  }
  '''
  7. addnode_modules to .gitignore
  8. to run use 'npm run dev'
## REST API



 majorly backend server return only data not html file

 - REST API uses (get, post, put, patch, delete) method to communicate with client

 any browser can check only get method

/ - for other method type we use third party API Tester like postman, thunder client, echo api etc