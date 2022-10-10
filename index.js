let button = document.getElementById("btn");
button.addEventListener("click", () => {
  let arr = [];
  let result = document.getElementById("result");
  result.style.visibility = "visible";
  arr.push(document.getElementById("tree").value);
  arr.push(document.getElementById("aircraftmov").value);
  arr.push(document.getElementById("passflights").value);
  arr.push(document.getElementById("cargoflights").value);
  arr.push(document.getElementById("passnumbers").value);
  arr.push(document.getElementById("cargotons").value);
  arr.push(document.getElementById("energyusage").value);
  arr.push(document.getElementById("euperpax").value);
  arr.push(document.getElementById("waterusage").value);
  arr.push(document.getElementById("watersavings").value);
  arr.push(document.getElementById("wwgen").value);
  arr.push(document.getElementById("wwrecycl").value);
  arr.push(document.getElementById("solwstgen").value);
  arr.push(document.getElementById("solwstperpax").value);
  arr.push(document.getElementById("wstrecyclrate").value);
  arr.push(document.getElementById("hazwstgen").value);
  arr.push(document.getElementById("s1emission").value);
  arr.push(document.getElementById("s2emission").value);
  arr.push(document.getElementById("s1ands2").value);
  arr.push(document.getElementById("s3emission").value);
  arr.push(document.getElementById("carbonemisperpax").value);

  //   Check all the conditions and display a section at the bottom
  //rule1
  if (
    arr[1] > 39.3 &&
    arr[3] > 52.4 &&
    arr[14] > 33.5 &&
    arr[17] < 130.85 &&
    arr[18] > 59
  ) {
    result.innerText = "This is label 5";
    return;
  } 
  //rule2
  else if (
    arr[5] < 1.715 &&
    arr[11] > 2.4 &&
    arr[17] > 130.85 &&
    arr[18] < 207
  ) {
    result.innerText = "This is label 5";
    return;
  } 
  //rule3
  else if (
    arr[3] < 49.1 &&
    arr[4] <  110 &&
    arr[5] > 1.715 &&
    arr[9] > 18 &&
    arr[17]> 130.85
  ) {
    result.innerText = "This is label 5";
    return;
  }
 //rule4
  else if (
    arr[3] > 49.1 &&
    arr[4] <  110 &&
    arr[5] > 1.715 &&
    arr[9] > 18 &&
    arr[10] > 2.06 &&
    arr[17]> 130.85
  ) {
    result.innerText = "This is label 5";
    return;
  }
  //rule6
  else if (
    arr[1] > 50 &&
    arr[2] <  139 &&
    arr[6] > 43 &&
    arr[16] < 6.5 &&
    arr[17]< 130.85 &&
    arr[20] >1.15 &&
    arr[18] > 5.55 &&
    arr[18] < 59
    
  ) {
    result.innerText = "This is label 5";
    return;
  }
  
//rule 5
  else if (
    arr[1] > 39.3 &&
    arr[1] <  50 &&
    arr[6] > 43 &&
    arr[18] < 59 &&
    arr[16] < 6.5 &&
    arr[17]< 130.85 &&
    arr[20] >1.15
  ) {
    result.innerText = "This is label 5";
    return;
  }
//rule 7
  else if (
    arr[1] > 181 &&
    arr[3] <  52.5 &&
    arr[6] > 730 &&
    arr[7] > 9.7 &&
    arr[6] < 968.75 &&
    arr[18] > 59 &&
    arr[17]< 130.85 &&
    arr[20] >2.28
  ) {
    result.innerText = "This is label 5";
    return;
  }
  
//rule 8
  else if (
    arr[1] > 39.3 &&
    arr[3] <  52.5 &&
    arr[3] > 30.5 &&
    arr[5] < 10.4 &&
    arr[6] < 710 &&
    arr[7] > 2.35 &&
    arr[9]>10 &&
    arr[12] >0.317 &&
    arr[15] > 695 &&
    arr[18] > 59 &&
    arr[17]< 130.85 
  ) {
    result.innerText = "This is label 5";
    return;
  }

  //rule 9
  else if (
    arr[1] > 141.3 &&
    arr[3] <  30.5 &&
    arr[4] < 102&&
    arr[5] > 1.425 &&
    arr[6] < 710 &&
    arr[7] > 2.35 &&
    arr[7] < 8.4 &&
    arr[15] > 695 &&
    arr[18] > 59 &&
    arr[17]< 130.85 
  ) {
    result.innerText = "This is label 5";
    return;
  }
  //rule 10
  else if (
    arr[1] > 141.3 &&
    arr[2] <190.5 &&
    arr[3] <  30.5 &&
    arr[5] < 1.425 &&
    arr[6] < 710 &&
    arr[6] >6.96 &&
    arr[7] > 2.35 &&
    arr[8] > 2.22 &&
    arr[11] > 765 &&
    arr[13] > 0.171 &&
    arr[15]> 1700 &&
    arr[18] > 59 &&
    arr[17]< 130.85 &&
    arr[19] >226.26 &&
    arr[19] <750
  ) {
    result.innerText = "This is label 5";
    return;
  }

  //rule1
  else if (
    arr[1] > 39.3 &&
    arr[3] <  52.4 &&
    arr[4] <10.4 &&
    arr[5] < 710 &&
    arr[10] < 695 &&
    arr[11]< 130.85 &&
    arr[11] <35.5 &&
    arr[12] > 59 &&
    arr[12] < 98 &&
    arr[14] >33.5 &&
    arr[17] <130.85 &&
    arr[18] > 59
  ) {
    result.innerText = "This is label 0.5";
    return;
  }
//rile 2

else if (
  arr[1] > 39.3 &&
  arr[3] <  52.4 &&
  arr[4] > 10.4 &&
  arr[5] < 710 &&
  arr[5] > 82.3 &&
  arr[8] < 113.5 &&
  arr[11]< 130.85 &&
  arr[12] > 59 &&
  arr[17] >130.85 &&
  arr[18] <207
) {
  result.innerText = "This is label 0.5";
  return;
}
//rule3
else if (
  arr[1] > 141.3 &&
  arr[2] <190.5 &&
  arr[3] >30.5 &&
  arr[3]< 52.4 &&
  arr[4] <1.425 &&
  arr[5] <6.96 &&
  arr[6] >2.35 &&
  arr[7]>10.01 &&
  arr[9] >0.171 &&
  arr[10]>695 &&
  arr[11]<130.85 &&
  arr[12]>59 &&
  arr[13]<226.26 &&
  arr[17]>130.85 
  ) {
  result.innerText = "This is label 0.5";
  return;
}

//rule4
else if (
  arr[1] > 141.3 &&
  arr[1] <201 &&
  arr[2] >190.5 &&
  arr[3] >30.5 &&
  arr[3]< 52.4 &&
  arr[4] <1.425 &&
  arr[5] <710 &&
  arr[6] >2.35 &&
  arr[9]<1070 &&
  arr[9] >0.171 &&
  arr[10]>695 &&
  arr[11]<130.85 &&
  arr[12]>59 &&
  
  arr[17]>130.85 
  ) {
  result.innerText = "This is label 0.5";
  return;
}

  else {
    result.innerText = "No label";
    return;
  }
});
