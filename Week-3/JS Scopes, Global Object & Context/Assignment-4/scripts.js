function calcWordFrequencies(){
    let prompInput = prompt()
    const ArrStr = prompInput.split(" ")
    for (let i = 0; i < ArrStr.length; i++) {
        // console.log(ArrStr[i]+(i+1))
        console.log(`${ArrStr[i]} ${i+1}`)
    }
    

}
calcWordFrequencies();