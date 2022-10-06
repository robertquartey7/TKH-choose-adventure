const userName = prompt("what is your name").toLowerCase();
const userNumber = prompt(
  "pick any number in your head and type 'next' after."
).toLowerCase();

if (userNumber == "next") {
  const next_1 = prompt("multiply the number by 2 and type next");
  if (next_1 == "next") {
    const computer_num = Math.floor(Math.random() * 10) + 1;
    const next_2 = prompt(`add ${computer_num} to the number and press next`);
    if (next_2 == "next") {
      const next_3 = prompt("divide the results by 2 and type next");
      if (next_3 == "next") {
        const next_4 = prompt(
          "substract the number you first picked from the result and type next"
        );
        if (next_4 == "next") {
          alert(`the result is ${computer_num/2}`);
        } else {
          console.log("game over. Refesh your browser to start");
        }
      } else {
        console.log("game over. Refesh your browser to start");
      }
    } else {
      console.log("game over. Refesh your browser to start");
    }
  } else {
    console.log("game over. Refesh your browser to start");
  }
} else {
  console.log("game over. Refesh your browser to start");
}
