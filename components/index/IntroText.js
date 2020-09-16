import React from 'react'
import Slanted from './Slanted'

const IntroText = () => {
  return (
    <Slanted className="overlap">
      <div className="purple">
        <p>
          Ik ben Yorrick, {age('1999-03-03')} jaar oud en derdejaars student web
          development aan de HAN in Arnhem. Op het moment loop ik stage bij de
          Belastingdienst in Apeldoorn bij het Mobile Competence Center. Ik hoop
          hier mijn kennis op het gebied van .NET en projectontwikkeling uit te
          breiden.
        </p>
      </div>
    </Slanted>
  )
}

const age = dob =>
  Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10)

export default IntroText
