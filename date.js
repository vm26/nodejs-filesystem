const http = require('http');
const fs = require('fs');


const port = process.env.PORT || 8000;
const date = new Date;
//for txt file name in date-time format
let filename = date.getDate().toString() + (date.getMonth() + 1) + date.getFullYear() + date.getTime();
//for content in timestamp
const data = date.getTime().toString();
http.createServer((req, res) => {
    res.writeHeader(200, { "Content-Type": 'text/html' }),
        fs.writeFile(`DateTime/${filename}.txt`, data,
            (err) => {
                if (err)
                    console.log(err);                

            }
        )
        fs.readdir('DateTime/', (err, files) => {
            if(err)
            console.log(err);
            else{
             for( const file of files)
                {    
                    //retrieve all the txt files inside folder                
                    res.write(file + '<br>')  ;                   
               } 
                 res.end() 
            } } )
})
    .listen(port, () => {
        console.log("server is up in ", port)
    })
