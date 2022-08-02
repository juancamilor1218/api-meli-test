const express = require("express"); 
const app = express();
const PORT = process.env.PORT || 4000;
const  itemRoutes = require('./routes/items.routes.js');
const  cors = require('cors')



app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use('/api/items',itemRoutes);



async function initialize(){    
    app.listen(PORT);
};

initialize()
    .finally(
        () => console.log(`app started on port:${PORT}`)
    );