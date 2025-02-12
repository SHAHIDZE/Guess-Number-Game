let num = Number(prompt("Son kiriting"))
let randomNum = Math.floor(Math.random() * 10)
let tries = 1

if (num >= 0 && num <= 10) {
    while (num != randomNum) {
        if (num != randomNum) {
            if (num > randomNum) {
                console.log("Less than " + num);  
            }
            if (num < randomNum) {
                console.log("Greater than " + num);
            }
            num = Number(prompt("Son kiriting"))
            tries++
        } 
    }
    alert("You won in " + tries + " tries");
} else {
    console.log("Faqat 0 dan 10 gacha son kiritishingiz mumkin");
}