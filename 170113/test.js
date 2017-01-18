const arr = [1, 2, 3, 5]

console.log(arr.find(a => a === 4 ));

if (arr.find(a => a === 3 )) {
  console.log('OK')
}else{
  console.log('No')
}