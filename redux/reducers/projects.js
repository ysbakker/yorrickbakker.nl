import produce from 'immer'

const projects = produce((draft, action) => {}, [
  {
    title: 'Quizzer',
    body: 'bruh moment',
    codeUrl: 'https://github.com/ysbakker/Quizzer-WS',
    demoUrl: 'https://quizzer.yorrickbakker.nl',
  },
])

export default projects
