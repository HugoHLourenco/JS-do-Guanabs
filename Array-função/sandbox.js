let nums = [3, 7, 9, 1, 2]

nums.push(7)
nums.sort()

//console.log(`Nosso Array tem ${nums.length} elementos e os valores são: ${nums.sort()}`)

/*for (let i= 0; i < nums.length; i++){
    console.log(`A posição [${i}] tem valor ${nums[i]}`)
}   
*/

for (i in nums) {
    console.log("Na posição [" + [i] + "] O valor é " + nums[i])
}