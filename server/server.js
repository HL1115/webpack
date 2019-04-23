let express = require('express');
let app = express();

app.listen(8080);
let list = [
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'目的地'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'亲子游学'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'酒店预订'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'车辆接送'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'签证代办'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'精彩瞬间'
    }
]

app.get('/api/list',(req,res)=>{
    res.json(list)
})