// Normal way

const arr = [1, 2, 3, 4, 5];

function normalWay() {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
}

normalWay();

// Using MAP transforming a array

function transform(i) {
  return i * 2;
}

const ans = arr.map(transform);
console.log(ans);
