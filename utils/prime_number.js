const checkPrime = (counter) =>{
    let isPrime = true
    for (let i = 2; i < counter; i++) {
        if (counter % i == 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime) {
        return true
    } else {
        return false
    }
}


export default checkPrime