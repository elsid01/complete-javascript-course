var day = prompt("Enter a digit between 1 and 7");
day = parseInt(day);

switch (day) {
  case 1:
    console.log("The number " + day + " correspond to Monday");
    break;

  case 2:
    console.log("The number " + day + " correspond to Tuesday");
    break;

  case 3:
    console.log("The number " + day + " correspond to Wednesday");
    break;
  case 4:
    console.log("The number " + day + " correspond to Thursday");
    break;
  case 5:
    console.log("The number " + day + " correspond to  Friday");
    break;
  case 6:
    console.log("The number " + day + " correspond to Saturday");
    break;
  case 7:
    console.log("The number " + day + " correspond to Sunday");
    break;
  default:
    console.log("Not a valid number");
}
