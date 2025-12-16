let strs=["flower","flow","flight"];

function longestCommonPrefix(arrayName){

    if(arrayName.length === 0) return " ";

    let shortestWord=arrayName[0];

    for(let i=0; i<arrayName.length; i++){

        if(arrayName[i].length<shortestWord.length){

            shortestWord=arrayName[i];
        }
    }

    let prefix="";

    for(let k=0; k<shortestWord.length; k++){

        let char=shortestWord[k];

        for(let i=0; i<arrayName.length; i++){

         if(arrayName[i][k] !== char){
            return prefix
         }

        }
        prefix+=char
    }

    return prefix
}

console.log(longestCommonPrefix(strs))