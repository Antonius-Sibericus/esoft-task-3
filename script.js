const array = "[({[{()}]})]";

function check(array) {
    const result1 = array.split("{");
    const result2 = array.split("}");
    const result3 = array.split("(");
    const result4 = array.split(")");
    const result5 = array.split("[");
    const result6 = array.split("]");
    return result1[0].length === result2[result2.length - 1].length && result3[0].length === result4[result4.length - 1].length && result5[0].length === result6[result6.length - 1].length;
};

console.log(check(array));