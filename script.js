import fs from "fs/promises"

const basepath = "C:\\Users\\Raj\\Desktop\\webDevProjects\\clearTheClutter"

let files = await fs.readdir(basepath)

for(const item of files){
    let ext = item.split(".")[item.split(".").length - 1]
    if(fsync.existsSync(path.join(basepath , ext))){
        //move the file to the directory
        fs.rename(path.join(basepath , item) , path.join(basepath , ext , item))

    }
    else{
        fs.mkdir(ext);
    }
    console.log(item)
}