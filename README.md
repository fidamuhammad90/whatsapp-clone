# nextjs-whatsapp-clone-starter
## Project Setup:
* Go to the Client folder through "cd client", then run "yarn".
* Then go to the Server folder through "cd server", then run "yarn".
* Make a db in Firebase with name of Whatsapp-clone.
* Iniciate Prisma, by runing command "npx prisma init" (inside server directry).
* Go to the Prisma folder select your db provider = "postgresql". In my case I am using postgresql.
* Inside Pisma file create a new model to store the user credentials.
* Then go to the .env file and set your username, password and db name.
* After changes in .env file, run the command in server directory "npx prisma generate" to generate the prisma.
* At this step install "PostgreSQL" server on local.
* Then run the command in server directory "npx prisma db push" to push the db.
* To run the prisma model "User" use the command "npx prisma studio"
* The step is to set "Node js Server" server, open the index.js file and write the setup.
* Here our Next js, Firebase, Prisma and our Nodemon setup successfully. All of the basic stuff setup successfully done.
