const findLongest = () => {
  const word = document.getElementById("name");
  const submit = document.getElementById("submit");
  let result = document.getElementById("result");


  const handleEvent = (event) => {
    event.preventDefault();
    let s = word.value;
    let stack = [];
    let temp = "";
    let sub = "";

    for (let i = s.length - 1; i >= 0; i--) {
      stack.push(s.charAt(i));
    }

    while (stack.length > 0) {
      if (temp.includes(stack[stack.length - 1])) {
        temp = temp.substring(temp.indexOf(stack[stack.length - 1]) + 1, temp.length);
      }
      temp += stack.pop();
      if (temp.length > sub.length) {
        sub = temp;
      }
    }
     result.innerHTML = sub;
  }

  submit.addEventListener('click', function (event) {
    handleEvent(event);
  });


}
findLongest();
