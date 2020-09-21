var fs = require('fs');

/*fs.writeFile('mytext.txt','This is from Nareshit',function(err){
    if(err) throw err;
    console.log("File created")
})

fs.appendFile('mytext.txt','This is from Nareshit \n',function(err){
    if(err) throw err;
    console.log("File created")
})

fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

fs.rename('mytext.txt','mycode.txt',function(err){
    if(err) throw err;
    console.log("file renamed")
})
*/

fs.unlink('mycode.txt',function(err){
    if(err) throw err;
    console.log("File Deleted")
})