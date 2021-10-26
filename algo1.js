
const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(num){
    for(let i = 0; i < num.length; i++){
        let flag = true;
        for(j = 0; j < num.length - 1 - i; j++){
            if(num[j] > num[j + 1]){
                let temp = num[j];
                num[j] = num[j + 1];
                num[j+1] = temp;
                flag = false;
            }
        }

        if(flag){
            break;
        }
        
    }
    return num;
}

console.log(bubbleSort(nums1))
console.log(bubbleSort(nums2))