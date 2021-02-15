import { reverseString } from "./easy/344_Reverse_String"
import { maximumWealth } from "./easy/1672_Richest_Customer_Wealth"
import { selfDividingNumbers } from "./easy/728_Self_Dividing_Numbers"
import { arrayPairSum } from "./easy/561_Array_Partition_I"
import { singleNumber } from "./medium/260_Single_Number_III";
import { createTargetArray } from "./easy/1389_Create_Target_Array_in_the_Given_Order";
import { subsets } from "./medium/78_Subsets";
import { judgeCircle } from "./easy/657_Robot_Return_to_Origin";
import { restoreString } from "./easy/1528_Shuffle_String";
import { reverseWords } from "./easy/557_Reverse_Words_in_a_String_III";
import { countBits } from "./medium/338_Counting_Bits";
import { sortedSquares } from "./easy/977_Squares_of_a_Sorted_Array";
import { sumZero } from "./easy/1304_Find_N_Unique_Integers_Sum_up_to_Zero";
import { findDuplicates } from "./medium/442_Find_All_Duplicates_in_an_Array";
import { ParkingSystem } from "./medium/1603_Design_Parking_System";


// console.log(reverseString(["h", "e"]))
// console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
// console.log(selfDividingNumbers(1, 22));
// console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
// console.log(singleNumber([4, 1, 2, 1, 2]))
// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
// console.log(subsets([1, 2, 3]))
// console.log(judgeCircle("UD"));
// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))
// console.log(reverseWords("Let's take LeetCode contest"));
// console.log(singleNumber([1, 2, 1, 3, 2, 5]))
let parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1)); // return true because there is 1 available slot for a big car
console.log(parkingSystem.addCar(2)); // return true because there is 1 available slot for a medium car
console.log(parkingSystem.addCar(3)); // return false because there is no available slot for a small car
console.log(parkingSystem.addCar(1)); // return false because there is no available slot for a big car. It is