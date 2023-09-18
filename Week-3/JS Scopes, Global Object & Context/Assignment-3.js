function drawTriangle(num) {
  for (let i = 0; i < num; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result = result.concat("*");
    }
    console.log(result);
  }
}
drawTriangle(4);
