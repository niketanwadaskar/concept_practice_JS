function fun(input) {

    for (let i = 0; i < input.length; i++) {
        let found = false;
        for (let j = 0; j < input.length; j++) {
            if (i !== j && input[i] == input[j]) {
                found = true
                break
            }
        }
        if (found == false) {
            return input[i]
        }
    }  
    return "ayyen"
}
const input = "swiss"
console.log(fun(input))
