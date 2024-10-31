function getDuplicateNumber(numbers) {
    const setNumbers = new Set();
  
    for (let i = 0; i < numbers.length; i++) {
      if (setNumbers.has(numbers[i])) {
        return `The duplicate element is ${numbers[i]}`;
      } else {
          setNumbers.add(numbers[i])
      }
    }
    return false;
  }
  console.log(getDuplicateNumber([1, 0, 3, 5, 0]))
  