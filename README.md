comunio-players
===============

CRUD application with stack MEAN. List of my comunio players.

Main functions: list, add and remove players.

Use instructions:

1. Install de dependencies defined in package.json
	npm install
2. MongoDB
	a. Download mongo and install it
		http://www.mongodb.org/downloads?_ga=1.243529089.589564972.1412676072
	b. Create data directory (cmd)
		cd \
		md \data\db
	c. cmd as administrator
		"c:\Program Files\MongoDB 2.6 Standard\bin\mongod.exe"
	d. another cmd as administrator. Start mongo
		"c:\Program Files\MongoDB 2.6 Standard\bin\mongo.exe"
	Mongo console once is started
		show dbs
		use angular-tod (use ddbb)
		show collections (show tables)
		db.tabla.find() (Find: show table results)
3. Run the server
	node app.js
4. In the browser
	http://localhost:3000

