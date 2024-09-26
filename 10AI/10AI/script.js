const startText = document.getElementById("startText");
const question = document.getElementById("question");
const variant1 = document.getElementById("variant1");
const variant2 = document.getElementById("variant2");
const variant3 = document.getElementById("variant3");
const variant4 = document.getElementById("variant4");
const btn = document.createElement("button");
btn.textContent = "Start";
btn.style.padding = "15px 20px";
btn.style.fontSize = "50px";
btn.style.color = "white";
btn.style.backgroundColor = "#4C0099";
btn.style.borderRadius = "5px";
btn.style.fontWeight = "bold";
document.body.appendChild(btn);
let currentQuestionIndex = 0;
const questionsList = [
    "Ամսի 25-ին ո՞ւմ ծնունդն էր",
    "Մի քիչ էլ ֆիզիկայից։ Ո՞վ է գրել հետևյալ օրենքը՝ հակազդեցության ուժը և կշիռը նույն բնույթի ուժեր են: Դրանք ուղղությամբ հակադիր են, մեծությամբ՝ հավասար P=N",
    "Դուք սիրեցի՞ք մեր դասարանը",
    "Իսկ մենք ձեզ?",
    "Իսկ կհիշե՞ք՝ ամսի 22-ին ինչ օր էր"
];
const answersList = [
    ["Ժորայի", "Առյուծի ձագի", "Սամվելի", "Կորյունի"],
    ["Գագիկ Նյուտոնը", "Հասմիկ Էյնշտեյնը", "Հովհաննես Ֆարադեյը", "Մարիամ Գալիլեյը"],
    ["Չէ!", "ԴԵռ չգիտեմ", "Այո", "Իհարկե սիրեցի!"],
    ["Իհարկե!", "Անկասկած!", "Շաաաաաատ~", "Էս հարց էր?"],
    ["Ինչի ի՞նչ օր էր որ", "Կիրակի չէ՞ր", "Չգիտեմ", "Վայ~ էտ օրը նշանվել եմ!"]
];

function start() {
    btn.style.display = "none"; 
    variant1.style.display = "block";
    variant2.style.display = "block";
    variant3.style.display = "block";
    variant4.style.display = "block";
    giveQuestion(); 
}

function giveQuestion() {
    if (currentQuestionIndex < questionsList.length) {
        startText.textContent = questionsList[currentQuestionIndex];
        giveAnswers();
    } else {
        startText.textContent = "Շնորհավորում ենք ձեզ!"; 
        variant1.style.display = "none";
        variant2.style.display = "none";
        variant3.style.display = "none";
        variant4.style.display = "none";
    }
}

function giveAnswers() {
    const answers = answersList[currentQuestionIndex];
    variant1.textContent = answers[0];
    variant2.textContent = answers[1];
    variant3.textContent = answers[2];
    variant4.textContent = answers[3];
}

btn.addEventListener("click", start);
variant1.addEventListener("click", nextQuestion);
variant2.addEventListener("click", nextQuestion);
variant3.addEventListener("click", nextQuestion);
variant4.addEventListener("click", nextQuestion);


function nextQuestion() {
    currentQuestionIndex++;
    giveQuestion(); 
}
//