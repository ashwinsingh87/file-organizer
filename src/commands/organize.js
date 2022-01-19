let fs = require("fs");
let path = require('path')  
let types = {
    media: ["mp4" , "mkv", "mp3"],
    archives: ['zip','rar','tar','gz','ar','isp',"xz"],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app: ['exe','dng','pkg','deb']
}
function organizeFn(dirpath){
    // console.log("Organize command implemented for ", dirpath);
    
    // 1. input -> directory path.
    let destpath;
    if(dirpath == undefined){
        destpath = process.cwd();
        return;
    }else{
        let doesexist = fs.existsSync(dirpath);
        if(doesexist){

    // 2. create -> organized files -> directory

           destpath = path.join(dirpath,"organized_files");     
           if(fs.existsSync(destpath)==false){
           fs.mkdirSync(destpath);
           }
        }else{
            console.log("please provide correct directory");
            return;
            }
    }
   organizehelper(dirpath, destpath);
    // 3. identify categories of all the files present in the inpur directory.
    // 4. copy/ cut files to that organized directory inside of any of the category folder.
}

function organizehelper(src, dest){
    // 3. identify categories of all the files present in the inpur directory.
    let childname = fs.readdirSync(src);
    for(let i=0; i<childname.length; i++ ){
        let childaddress = path.join(src, childname[i]);
        let isfile = fs.lstatSync(childaddress).isFile();
        if(isfile){
           //console.log(childname[i]);
           let category = getCategory(childname[i]);
           console.log(childname[i], "belongs to -->",category);
           sendFiles(childaddress, dest, category);
        }
    }
}
function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for(let i=0; i<cTypeArray.length; i++){
            if(ext == cTypeArray[i]){
                return type;
            }
        }
    }return "others";
}
function sendFiles(srcFilePath , dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}
module.exports={
    organizekey : organizeFn
}