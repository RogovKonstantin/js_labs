function ageDecision(age) {
    if (age < 0) {
        console.log("ошибка");
    } else if (age <= 2) {
        console.log("младенец");
    } else if (age <= 13) {
        console.log("ребенок");
    } else if (age <= 19) {
        console.log("подросток");
    } else if (age <= 65) {
        console.log("взрослый");
    } else {
        console.log("пожилой");
    }
}

ageDecision(66);
ageDecision(-1);
ageDecision(3);
ageDecision(19);
ageDecision(65);