const arr = [1, 2, 3, 4, 5];

// Normal way
function noramlWay() {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

noramlWay();

// Using Filter function

const ans = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    false;
  }
});

console.log(ans);
