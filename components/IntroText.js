import React from 'react'
import '../css/IntroText.module.sass'

const IntroText = () => {
  return (
    <div className="paragraph purple lift-up">
      <p>
        Ik ben Yorrick, {age('1999-03-03')} jaar oud en tweedejaars student web
        development aan de HAN in Arnhem. Binnen de informatica heb ik een breed
        interessegebied. Momenteel richt ik me vooral op React en NodeJS, maar
        ik sta altijd open voor nieuwe ideeën en technieken!
      </p>
    </div>
  )
}

const age = dob =>
  Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10)

export default IntroText
