import React from 'react'
import '../css/IntroText.module.sass'
import Slanted from './Slanted'

const IntroText = () => {
  return (
    <Slanted className="overlap">
      <div className="purple">
        <p>
          Ik ben Yorrick, {age('1999-03-03')} jaar oud en tweedejaars student
          web development aan de HAN in Arnhem. Binnen de informatica heb ik een
          breed interessegebied. Momenteel richt ik me vooral op React en
          NodeJS, maar ik sta altijd open voor nieuwe ideeën en technieken!
        </p>
      </div>
    </Slanted>
  )
}

const age = dob =>
  Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10)

export default IntroText
