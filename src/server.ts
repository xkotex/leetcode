import { numberOfArithmeticSlices } from "./medium/413_Arithmetic_Slices";
import { minAddToMakeValid } from "./medium/921_Minimum_Add_to_Make_Parentheses_Valid";

//console.log(numberOfArithmeticSlices([1, 2, 3, 4]))
console.log(minAddToMakeValid("())")) //1
console.log(minAddToMakeValid("(((")) //3
console.log(minAddToMakeValid("()")) //0
console.log(minAddToMakeValid("()))((")) //4
console.log(minAddToMakeValid("((())")) //4