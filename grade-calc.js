// students score, total possible score
//12/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, E 50-59, F 0-49

let getGrade = function (studentScore, totalPossibleScore){
    let percent = (studentScore / totalPossibleScore) * 100;
    let grade;
    if (percent > 89){
        grade = 'A';
    } else if (percent > 79){
        grade = 'B';
    } else if (percent > 69){
        grade = 'C';
    } else if (percent > 59){
        grade = 'D';
    } else if (percent > 49){
        grade = 'E';
    } else grade = 'F';
    
    console.log(`${studentScore}/${totalPossibleScore} --> You got a ${grade} (${percent}%)!`)
}

getGrade(45, 100)
getGrade(45, 50)
getGrade(75, 100)
getGrade(86, 120)
getGrade(45, 30)