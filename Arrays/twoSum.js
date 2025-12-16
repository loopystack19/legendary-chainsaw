//In this leetcode problem, you are given a particular array and a target, you browse through all the elements of the array and check if they are any two elements that can add up to give you the target, if so you return the indexes else you return an empty array

let nums=[2,5,5,11];

function twoSum(arrayName, target){

    for(let i=0; i<arrayName.length; i++){

        for(let j=i+1; j<arrayName.length; j++){

            if(arrayName[i] + arrayName[j] === target){

                return[i,j];
            }
        }
    }
    return [];
}

console.log(twoSum(nums, 10));

//for this problem the mistake that i was making is that i started j at 1, instead of j=i+1

//The key in solving the twoSum probelm, its all about understanding the nested loops

//We initialize the outtter loop starting from 0 and we ensure its less than the length of the provided array
//We initialize the inner loop starting from i+1 and we ensure its less than the length of the provided array
//Then we test the logic, array[i] + array[j] === target. This approach is kinda slow but we are beginners so we just taking it one step at a time