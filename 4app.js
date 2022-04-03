const {readFile,writeFile}=require('fs')

readFile('./content/first.txt',(err,res)=>{
    if(err){
        console.log(err)
    }
    const first=res;

    readFile('./content/second.txt',(err,result)=>{
        if(err){
            console.log(err)
        }
        const second=result;
        writeFile('./content/result-sync2.txt','utf8'+first+second+'',(err)=>{
            if(err) {
                console.log(err)
            }
        })

    })
})




