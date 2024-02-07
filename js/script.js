const questions = [
  {
    question: "Qual método é usado para adicionar um evento a um elemento HTML em JavaScript?",
    answers: [
      "addEvent()",
      "addEventListener()",
      "attachEvent()"
    ],
    correct: 1
  },
  {
    question: "Qual é o operador lógico 'E' em JavaScript?",
    answers: [
      "&&",
      "||",
      "!"
    ],
    correct: 0
  },
  {
    question: "Qual função é usada para imprimir algo no console em JavaScript?",
    answers: [
      "print()",
      "log()",
      "console.log()"
    ],
    correct: 2
  },
  {
    question: "Qual dos seguintes não é um tipo de dados primitivo em JavaScript?",
    answers: [
      "boolean",
      "number",
      "array"
    ],
    correct: 2
  },
  {
    question: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
    answers: [
      "//",
      "/*",
      "#"
    ],
    correct: 0
  },
  {
    question: "Qual é a função usada para converter uma string em um número em JavaScript?",
    answers: [
      "parseString()",
      "toInt()",
      "parseInt()"
    ],
    correct: 2
  },
  {
    question: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    answers: [
      "removeLast()",
      "pop()",
      "deleteLast()"
    ],
    correct: 1
  },
  {
    question: "Qual é a forma correta de se referir a um elemento HTML pelo ID em JavaScript?",
    answers: [
      "getElementByID()",
      "selectByID()",
      "document.getElementById()"
    ],
    correct: 2
  },
  {
    question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    answers: [
      "push()",
      "append()",
      "add()"
    ],
    correct: 0
  },
  {
    question: "Qual operador é usado para verificar se dois valores são iguais em valor e tipo em JavaScript?",
    answers: [
      "==",
      "===",
      "="
    ],
    correct: 1
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const correct = new Set()
const totalQuestions = questions.length
const showTotal = document.querySelector('#hits span')
showTotal.textContent = correct.size + ' de ' + totalQuestions

for (let item of questions) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for (let answer of item.answers) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = answer
    dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
    dt.querySelector('input').value = item.answers.indexOf(answer)

    dt.querySelector('input').onchange = (event) => {
      const isValid = event.target.value == item.correct

      correct.delete(item)
      if (isValid) {
        correct.add(item)
      }
      showTotal.textContent = correct.size + ' de ' + totalQuestions
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
