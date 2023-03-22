my_nums = []

function nums() {
  let text;
  let num = Number(prompt("Adj meg egy számot:",0));
  if (num != NaN) {
    my_nums.push(num)
    sum = my_nums.reduce((partialSum, a) => partialSum + a, 0);
    product = my_nums.reduce( (a, b) => a * b )
    average = my_nums.reduce((a, b) => a + b, 0) / my_nums.length;
    // console.log(product)
    text = my_nums.toString()
    text += "<br>összeg: "+String(sum)
    text += "<br>szorzat: "+String(product)
    text += "<br>átlag: "+String(Math.round(average))
    document.getElementById("out").innerHTML = text;
  }
}