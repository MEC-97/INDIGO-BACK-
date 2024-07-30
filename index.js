const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT;


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  }); 
    
});    