var http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('<h1>Hello there it home page</h1>')
    }
    if(req.url==='/about'){
        res.end('<h1>Hello there it about page</h1>')
    }else{
        res.end('<a href="/">back in blod</a>')
    }
    
})

server.listen(8080)