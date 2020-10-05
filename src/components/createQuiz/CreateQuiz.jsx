import React, { Component } from "react";
import styles from "./CreateWebinar.module.css";

class CreateQuiz extends Component {
  state = {
    quiz: {
      directions: "",
      questions: {
        question1: {
          body: "",
          choices: {
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
          },
          answer: "",
        },
        question2: {
          body: "",
          choices: {
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
          },
          answer: "",
        },
        question3: {
          body: "",
          choices: {
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
          },
          answer: "",
        },
        question4: {
          body: "",
          choices: {
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
          },
          answer: "",
        },
      },
    },
  };
  onSubmit = (e) => {
    console.log(this.state);
  };
  render() {
    return (
      <form className={styles.test}>
        <input
          placeholder="quiz directions"
          value={this.state.quiz.directions}
          onChange={(e) =>
            this.setState({ quiz: { directions: e.target.value } })
          }
        />
        <input
          placeholder="Q1 body"
          value={this.state.quiz.questions.question1.body}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question1: { body: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q1 answer"
          value={this.state.quiz.questions.question1.answer}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question1: { answer: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q1 choice1"
          value={this.state.quiz.questions.question1.choices.choice1}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question1: { choices: { choice1: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q1 choice2 "
          value={this.state.quiz.questions.question1.choices.choice2}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question1: { choices: { choice2: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q1 choice3 "
          value={this.state.quiz.questions.question1.choices.choice3}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question1: { choices: { choice3: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q1 choice4"
          value={this.state.quiz.questions.question1.choices.choice4}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question1: { choices: { choice4: e.target.value } },
                },
              },
            })
          }
        />

        <input
          placeholder="Q2 body"
          value={this.state.quiz.questions.question2.body}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question2: { body: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q2 answer"
          value={this.state.quiz.questions.question2.answer}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question2: { answer: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q2 choice1"
          value={this.state.quiz.questions.question2.choices.choice1}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question2: { choices: { choice1: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q2 choice2"
          value={this.state.quiz.questions.question2.choices.choice2}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question2: { choices: { choice2: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q2 choice3"
          value={this.state.quiz.questions.question2.choices.choice3}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question2: { choices: { choice3: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q2 choice4"
          value={this.state.quiz.questions.question2.choices.choice4}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question2: { choices: { choice4: e.target.value } },
                },
              },
            })
          }
        />

        <input
          placeholder="Q3 body"
          value={this.state.quiz.questions.question3.body}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question3: { body: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q3 answer"
          value={this.state.quiz.questions.question3.answer}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question3: { answer: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q3 choice1"
          value={this.state.quiz.questions.question3.choices.choice1}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question3: { choices: { choice1: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q3 choice2"
          value={this.state.quiz.questions.question3.choices.choice2}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question3: { choices: { choice2: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q3 choice3"
          value={this.state.quiz.questions.question3.choices.choice3}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question3: { choices: { choice3: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q3 choice4"
          value={this.state.quiz.questions.question3.choices.choice4}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question3: { choices: { choice4: e.target.value } },
                },
              },
            })
          }
        />

        <input
          placeholder="Q4 body"
          value={this.state.quiz.questions.question4.body}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question4: { body: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q4 answer"
          value={this.state.quiz.questions.question4.answer}
          onChange={(e) =>
            this.setState({
              quiz: { questions: { question4: { answer: e.target.value } } },
            })
          }
        />
        <input
          placeholder="Q4 choice1"
          value={this.state.quiz.questions.question4.choices.choice1}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question4: { choices: { choice1: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q4 choice2"
          value={this.state.quiz.questions.question4.choices.choice2}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question4: { choices: { choice2: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q4 choice3"
          value={this.state.quiz.questions.question4.choices.choice3}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question4: { choices: { choice3: e.target.value } },
                },
              },
            })
          }
        />
        <input
          placeholder="Q4 choice4"
          value={this.state.quiz.questions.question4.choices.choice4}
          onChange={(e) =>
            this.setState({
              quiz: {
                questions: {
                  question4: { choices: { choice4: e.target.value } },
                },
              },
            })
          }
        />
      </form>
    );
  }
}
