function divideArray(nums){
    let evenNums=[]
    let oddNums=[]
    nums.map((num)=>{
        if(num%2==0){
           evenNums.push(num)
        }else{
            oddNums.push(num)
        }
    })
    console.log("Even Numbers:" +evenNums.sort((a,b)=>a-b))
    console.log("Odd Numbers:"+ oddNums.sort((a,b)=>a-b))
    if(evenNums.length>0){
        console.log("Even numbers:" +evenNums.length)
        evenNums.map((num)=>{
            console.log(num)
        })
    }else{
        console.log("Even numbers: None")
    }
    if(oddNums.length>0){
        console.log("Even numbers:" +oddNums.length)
        oddNums.map((num)=>{
            console.log(num)
        })
    }else{
        console.log("Even numbers: None")
    }
}
divideArray([4,2,8,3,9,6,5])