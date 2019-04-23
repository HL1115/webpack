let express = require('express');
let app = express();

app.listen(8080);
let list = [
    {
        img:,
        text:'目的地'
    },
]

app.get('/api/list',(req,res)=>{
    res.json(list)
})