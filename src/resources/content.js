const content={
    progress: -1,
    trivia: true,
    poll: false,
    personalityTest: false,
    survey: false,
    feedback: false,

    // quetsions: require("../assets/questions.json"),
    questions: [
      {
        id: "0",
        title: 'WHAT YEAR WAS LARKIN <span class="special-word">DRAFTED?</span>',
        questionTitle: "WHAT YEAR WAS LARKIN DRAFTED?",
        selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
        userChoice: -1,
        correctAnswer: 1,
        // choices:[
        //   "2012","2013","2014","2015",
        // ],
        images: [
          require("../assets/q1_a1.gif"),
          require("../assets/q1_a2.gif"),
          require("../assets/q1_a3.gif"),
          require("../assets/q1_a4.gif"),
        ],
      },
      {
        id: "1",
        title: "<span>When did larkin play in his</span> <span>first NHL game?</span>",
        questionTitle: "When did larkin play in his first NHL game?",
        selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
        userChoice: -1,
        correctAnswer: 0,
        images: [
          require("../assets/q2_a1.gif"),
          require("../assets/q2_a2.gif"),
          require("../assets/q2_a3.gif"),
          require("../assets/q2_a4.gif"),
        ],
      },
      {
        id: "2",
        title: "<span>Dylan larkin was named to the </span><span>NHL all-star game in what year?</span>",
        questionTitle: "Dylan larkin was named to the NHL all-star game in what year?",
        selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
        userChoice: -1,
        correctAnswer: 3,
        images: [
          require("../assets/q3_a1.gif"),
          require("../assets/q3_a2.gif"),
          require("../assets/q3_a3.gif"),
          require("../assets/q3_a4.gif"),
        ],
      },
      {
        id: "3",
        title: "<span>Dylan Larkin was named the ____ </span><span>Captain in red wings history.</span>",
        questionTitle: "Dylan Larkin was named the ____ Captain in red wings history.",
        selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
        userChoice: -1,
        correctAnswer: 1,
        images: [
          require("../assets/q4_a1.gif"),
          require("../assets/q4_a2.gif"),
          require("../assets/q4_a3.gif"),
          require("../assets/q4_a4.gif"),
        ],
      },
      {
        id: "4",
        title: "<span>Dylan Larkin has a dog named </span><span>___________ .</span>",
        questionTitle: "Dylan Larkin has a dog named ___________ .",
        selections: ["choice 1", "choice 2", "choice 3", "choice 4"],
        userChoice: -1,
        correctAnswer: 0,
        images: [
          require("../assets/q5_a1.gif"),
          require("../assets/q5_a2.gif"),
          require("../assets/q5_a3.gif"),
          require("../assets/q5_a4.gif"),
        ],
      },
    ],
}
export default content;