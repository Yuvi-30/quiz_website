const strt = document.querySelector('.btn');
const popinfo = document.querySelector('.pop');
const back = document.querySelector('.exit');
const quiz = document.querySelector('.head');
const main = document.querySelector('.main');
const ok = document.querySelector('.gogo');
const quit1 = document.querySelector('.quit');
const cont1 = document.querySelector('.container1');
const option_list = document.querySelector(".option_list");
const result_box = document.querySelector(".result_box");
const reload = document.querySelector(".reload");


let que_count = 0;
let que_numb = 1;
let userScore = 0;

reload.onclick = () => {
    window.location.reload();
}

strt.onclick = () => {
    popinfo.classList.add('active');
    main.classList.add('active');
}

back.onclick = () => {
    popinfo.classList.remove('active');
    main.classList.remove('active');
}

ok.onclick = () => {
    popinfo.classList.remove('active');
    main.classList.remove('active');
    cont1.classList.add('active');
    showQuetions(0); //calling showQestions function
    queCounter(1);
    Quetionno(1);
}

quit1.onclick = () => {
    confirm('You will go to home screen')
    window.location.reload();
}

const next_btn = document.querySelector('.next');
const prev_btn = document.querySelector('.prev');
const bottom_ques_counter = document.querySelector("total_que");

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        Quetionno(que_numb);
    }
    else if (que_numb == 5) {
        showResult();
    }
}

prev_btn.onclick = () => {
    if (que_numb == 1) {
        window.location.reload();
    }
    else if (que_count < questions.length) {
        que_count--;
        que_numb--;
        showQuetions(que_count);
        queCounter(que_numb);
        Quetionno(que_numb);
    }

}

function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");
    for(i=0; i < 4; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function Quetionno(index) {
    const quesno = document.querySelector(".quesno");
    let up = '<span>Q</span>' + index;
    quesno.innerHTML = up;
}

const total_que = document.querySelector(".total_que");

function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</span> of <span>' + questions.length + '</p></span>';
    total_que.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; 
    if(userAns == correcAns){
        console.log('correcAns');
        userScore += 1;
        answer.classList.add("correct");
    }
    else{
        console.log('incorrect');
        answer.classList.add("incorrect");
    }

    const allOptions = option_list.children.length;

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
}

function showResult(){
    result_box.classList.add("active"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    
        let scoreTag = '<span>and You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
}
