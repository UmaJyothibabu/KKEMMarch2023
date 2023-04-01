let i = 0;

while (i <= 15) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
    i++;
    continue;
  }
  console.log(`${i} is odd`);
  i++;
}

// function findDigits(n) {
//   // Write your code here
//   let num = n;
//   let count = 0;
//   let remainder;
//   while (num != 0) {
//     remainder = num % 10;
//     console.log("rem", remainder);
//     num = Math.floor(num / 10);
//     console.log("num", num);
//     if (remainder != 0) {
//       if (n % remainder == 0) {
//         count = count + 1;
//       }
//     }
//   }
//   return count;
// }
// let result = findDigits(12);
// console.log(result);

// function timeConversion(s) {
//   // Write your code here
//   let str;
//   let time = s.slice(2, 8);
//   if (
//     s[0] + s[1] > "12" ||
//     s[3] + s[4] > "60" ||
//     s[6] + s[7] > "60" ||
//     (s[8] + s[9] != "AM" && s[8] + s[9] != "PM")
//   ) {
//     return 0;
//   }
//   str = s[0] + s[1];
//   if (s.length == 10) {
//     if (s[8] == "A") {
//       console.log("uma");
//       if (str === "12") {
//         time = "00" + time;
//         console.log(time);
//         return time;
//       }
//       return s;
//     } else if (s[8] == "P") {
//       console.log("Hi");
//       switch (str) {
//         case "01":
//           s[0] = "1";
//           s[1] = "3";
//           break;
//         case "02":
//           s[0] = "1";
//           s[1] = "4";
//           break;
//         case "03":
//           s[0] = "1";
//           s[1] = "5";
//           break;
//         case "04":
//           s[0] = "1";
//           s[1] = "6";
//           break;
//         case "05":
//           s[0] = "1";
//           s[1] = "7";
//           break;
//         case "06":
//           s[0] = "1";
//           s[1] = "8";
//           break;
//         case "07":
//           time = "19" + time;
//           console.log(time);
//           console.log("hell");
//           break;
//         case "08":
//           s[0] = "2";
//           s[1] = "0";
//           break;
//         case "09":
//           s[0] = "2";
//           s[1] = "1";
//           break;
//         case "10":
//           s[0] = "2";
//           s[1] = "2";
//           break;
//         case "11":
//           s[0] = "2";
//           s[1] = "3";
//           break;
//         case "12":
//           time = "12" + time;
//           break;
//         default:
//           console.log("hello");
//       }
//     }
//   }
//   return time;
// }
// let string = timeConversion("12:40:59PM");
// console.log(string);
