import app from './server.js'
import connection from './database.js';

app.listen(app.get('port'),()=>{
    console.log(`Server funcionando en ${app.get('port')}`);
})

connection()