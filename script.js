let list = [];
let it = '';
let output = '';
document.getElementById('or').textContent = Math.sqrt(3);
document.getElementById('oro').textContent = Math.sqrt(5);
document.getElementById('ororo').textContent = Math.sqrt(7);
document.getElementById('title').onclick = function() {
  list = [[1, 2]];
  it = document.getElementById('input').value;
  for (i = 1; i <= parseInt(it); i++) {
    let temp = [];
    temp[0] = list[0][1] + 2 * list[0][0];
    temp[1] = 2 * list[0][1] + 3 * list[0][0];
    console.log(temp)
    list.unshift(temp);
    console.log(list);
  }
 
  output = (list[0][1] / list[0][0])+'='+list[0][1]+'/'+list[0][0];
  document.getElementById('output').textContent = output;
  list = [[1, 2]];
  for (i = 1; i <= parseInt(it); i++) {
    let temp = [];
    temp[0] = 1/2*(list[0][1]+list[0][0]);
    temp[1] = 1/2*(5*list[0][0]+list[0][1]);;
    console.log(temp)
    list.unshift(temp);
    console.log(list);
  }
  output = (list[0][1] / list[0][0])+'='+2*list[0][1]+'/'+2*list[0][0];
  document.getElementById('output1').textContent = output;
  list = [[1, 2]];
  for (i = 1; i <= parseInt(it); i++) {
    let temp = [];
    temp[0] = 4*list[0][0]+list[0][1];
    temp[1] = 7*list[0][0]+4*list[0][1];
    list.unshift(temp);
    console.log(list);
  }
  output = (list[0][1] / list[0][0])+'='+list[0][1]+'/'+list[0][0];
  document.getElementById('output2').textContent = output;
    }
