const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('welcome to our home page')
    }// (parameter) req: http.IncomingMessage
   if(req.url === '/about'){
         res.end('Our short history')
   }
   res.end(`
    <h1>opps dosent exi</h1>
 `  )
})

server.listen(5000)




