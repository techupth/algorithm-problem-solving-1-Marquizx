numbers = [2, 7, 11, 15];

function twoSum(numbers, target) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}

console.log(twoSum(numbers, 9));

//code ด้านบนคือคิดด้วยตัวเอง ใช้ bigO(n^2)
//code ด้านล่างคือ code ที่ใช้ เทคนิค two pointer โดยจะใช้ได้ก็ต่อเมื่อข้อมูลมีการ Sort ใช้ bigO(n)

function twoSum_With_TwoPointerSolution(numbers, target) {
  const result = [];
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      result.push(start);
      result.push(end);
      break;
    } else if (numbers[start] + numbers[end] < target) {
      start++;
    } else {
      end--;
    }
  }
  return result;
}

console.log(twoSum_With_TwoPointerSolution(numbers, 9));
