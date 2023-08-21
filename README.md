# whatsapp-clone
## Project Setup:
* Go to the Client folder through "cd client", then run "yarn".
* Then go to the Server folder through "cd server", then run "yarn".
* Make a db in Firebase with name of Whatsapp-clone.
* Iniciate Prisma, by runing command "npx prisma init" (inside server directry).
* Go to the Prisma folder select your db provider = "postgresql". In my case I am using postgresql.
* Inside Pisma file create a new model to store the user credentials.
* Then go to the .env file and set your username, password and db name.
* After changes in .env file, run the command in server directory "npx prisma generate" to generate the prisma.
* Then run the command in server directory "npx prisma db push" to push the db.
* 
