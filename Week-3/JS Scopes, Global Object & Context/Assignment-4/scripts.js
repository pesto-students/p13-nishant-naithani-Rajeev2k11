function calcWordFrequencies(){
    let prompInput = prompt()
    const ArrStr = prompInput.split(" ")        // convert string into Array with " " separation
    const words = new Map();
    for(const item of ArrStr){
        const normalWord = item.toLowerCase();   // convert to lowercase each word
        if(words.has(normalWord)){
           // If the word is already in the map, increment its frequency       
            words.set(normalWord, words.get(normalWord)+1);
        }else{
            words.set(normalWord,1);
        }
    }
    words.forEach((freq,word)=>{
        console.log(`${word} ${freq}`)
    })

}
calcWordFrequencies();