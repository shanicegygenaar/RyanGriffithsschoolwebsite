// created an array containing FAQ questions
var faqQuestions = [
   "How many pupils per class in the school?",
   "Do the children wear uniforms?",
   "What curriculum do we follow?",
   "What are the school terms?",
   "What grades does Mzamomtsha offer?",
   "How old must a child be to enrol for Grade R and Grade 1?",
   "What are the school hours?"
];

// replace p tags with relevant id using array indexing
    document.getElementById("q1").innerHTML = faqQuestions [0];
    document.getElementById("q2").innerHTML = faqQuestions [1];
    document.getElementById("q3").innerHTML = faqQuestions [2];
    document.getElementById("q4").innerHTML = faqQuestions [3];
    document.getElementById("q5").innerHTML = faqQuestions [4];
    document.getElementById("q6").innerHTML = faqQuestions [5];
    document.getElementById("q7").innerHTML = faqQuestions [6];

//created an array containing FAQ answers
var faqAnswers = [
    "There are currently 60 learners per classroom, but it should be expected to decrease with the introduction of mobile classrooms provided by the Western Cape Education Department.",
    "Yes, uniforms are worn from grade 1 through to matric at Mzamomtsha Primary School.",
    "For more information on the curriculum we follow, you can click here.",
    "Term 1: 15 January – 20 March"
    "Term 2: 31 March – 12 June"
    "Term 3: 7 July – 18 September"
    "Term 4: 29 September – 4 December",
    "We offer grades 1 through to grade 12.",
    "Grade 1 pupils must be turning 6 years old by 30 June of that year to be enrolled.",
    "Grades 1 through 7: 08:00 – 13:00"
    "Grades 8 through 12: 08:00 – 15:00"
];

// replace p tags with relevant id using array indexing
    document.getElementById("a1").innerHTML = faqAnswers[0];
    document.getElementById("a2").innerHTML = faqAnswers[1];
    document.getElementById("a3").innerHTML = faqAnswers[2];
    document.getElementById("a4").innerHTML = faqAnswers[3];
    document.getElementById("a5").innerHTML = faqAnswers[4];
    document.getElementById("a6").innerHTML = faqAnswers[5];
    document.getElementById("a7").innerHTML = faqAnswers[6];

// create a function for submitting information put into contact form
function formInfo() {
    document.getElementById("contactform").submit();
  }