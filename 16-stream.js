const { createReadStream } = require('fs')

const stream = createReadStream('./content/big_text.txt',{highWaterMaek:900})

stream.on('data', (result)=>{
  console.log(result)
})

stream.on('error',(err)=>{
  res.end(err)
})