const { exec } = require("child_process");
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(express.json());
app.use(cors());    

app.post('/',async (req, res) => {
    try{
    const b = await req.body.exp;
     console.log(typeof(b))
    let ans = eval(b)
    console.log(ans)
   res.json(ans);
    }
    catch(e){
        res.json(e);
    }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
