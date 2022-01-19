function helpFn(dirpath){
    console.log(`
    List of all the commands:
        node fileorganizer.js tree "directoryPath"
        node fileorganizer.js organize "directoryPath"
        node fileorganizer.js help
    
    `);
} 
module.exports = {
    helpkey : helpFn
}