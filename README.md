## 1. Install mongodb community edition ubuntu 20.04
```
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
$ sudo apt-get install gnupg
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - 
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | $ sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org

$ echo "mongodb-org hold" | sudo dpkg --set-selections
$ echo "mongodb-org-server hold" | sudo dpkg --set-selections
$ echo "mongodb-org-shell hold" | sudo dpkg --set-selections
$ echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
$ echo "mongodb-org-tools hold" | sudo dpkg --set-selections

$ ps --no-headers -o comm 1
$ sudo systemctl start mongod
$ mongo
```

## 2. Install Mongo-Compas
```
$ wget https://downloads.mongodb.com/compass/mongodb-compass_1.26.1_amd64.deb
$ sudo apt --fix-broken install //If any error please try this
$ sudo dpkg -i mongodb-compass_1.26.1_amd64.deb
$ mongodb-compass
```
3. Install Dependencies package ini
```
$ npm install
$ npm start
```