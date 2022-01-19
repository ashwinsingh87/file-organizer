let fs = require("fs");
let path = require('path')  
function treeFn(dirpath){
    // let destpath;
    if(dirpath == undefined){
        treeHelper(process.cwd(), "");
        return;
    }else{
        let doesexist = fs.existsSync(dirpath);
        if(doesexist){
            treeHelper(dirpath, "");
        }else{
            console.log("please provide correct directory");
            return;
            }
        }
}
function treeHelper(dirPath, indent){
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "|---" + fileName);
    }else{
        let dirName = path.basename(dirPath)
        console.log(indent + "---" + dirName);
       let childrens = fs.readdirSync(dirPath);
       for(let i=0; i<childrens.length ; i++){
           let childPath = path.join(dirPath, childrens[i]);
           treeHelper(childPath, indent + "\t");
       }
    }


}
module.exports = {
    treekey : treeFn
}