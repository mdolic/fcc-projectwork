function myReplace(str, before, after) {
    let a = str.indexOf(before); //1
    if(str[a] === str[a].toUpperCase()){ //2
        after = after.charAt(0).toUpperCase() + after.slice(1); //3
    }
    return str.replace(before,after); //4

    }

    /*
        1. using indexOf() finds the location of the before string
        2. check if first letter of before is captialized agaisnt first letter of
        after. if not do step 31
        3. change after first character to upper case
        4. replace, before with after
        5. finally return the string

         links on mdn => indexOf, touppercase, charAt, slice
        */

    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function myReplace2(str,before,after){
    if(before[0] == before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1);
    }
    return str.replace(before,after);
}
myReplace2("His name is Tom", "Tom", "john");