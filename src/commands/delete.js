let fs = require("fs");
let path = require('path') 
function deleteFn(dirpath){
    if(dirpath == undefined ){
        console.log("please provide valid directory path");
    }
    let content = fs.readdirSync("dirpath");
    console.log(content);
    for(let i =0; i<content.length; i++){
        fs.unlinkSync("dirpath/" + content[i]);
    }
    //let isFile = fs.lstatSync(dirpath).isFile();
    //if(isFile == true){
      //fs.unlinkSync('dirpath');  
    //}else{
      // fs.rmdirSync("dirpath");
    //}
}
module.exports = {
    deletekey : deleteFn 
}