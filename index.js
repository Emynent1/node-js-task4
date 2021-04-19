var https = require ('https');
var fs = require('fs');

//Fetching the data

https.get('https://jsonplaceholder.typicode.com/posts', res => {
    
let body =" ";
res.on("data", data=> {
    body+=data;
})
res.on("end", ()=>{
    fs.writeFile("./result/posts.json", body, (err)=>{
        if (err) throw err
        else {
            console.log('file written');
        }
    });
});

});