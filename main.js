let nums = [3,6,4,9,2,7,10];
const lista =[999, 255, 121];


function minAndMaxNum(words) {


    const nums=[...words];
    nums.sort((a,b) => a-b);


    let menor=nums[0];


    let mayor=nums[nums.length-1];


    return [words.indexOf(menor),words.indexOf(mayor)]
}

console.log(minAndMaxNum(lista));