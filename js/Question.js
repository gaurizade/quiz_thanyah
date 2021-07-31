class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("");
    this.input2 = createInput("");
    this.button = createButton('Submit');
    this.label1 = createElement('h5');
    this.label2 = createElement('h5');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.reset = createButton('Reset');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.label1.hide();
    this.label2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);
    this.label1.html("Enter Your Name:");
    this.label1.position(150,190);
    this.label2.html("Enter the Correct Option Number:");
    this.label2.position(350,190);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.reset.position(900, 660);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'lightpink');

   
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.label1.hide();
      this.label2.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    
    this.reset.mousePressed(()=>{
      Contestant.updateCount(0);
       Quiz.update(0);
  });   
}
  }
