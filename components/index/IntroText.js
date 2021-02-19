import React from 'react'
import Slanted from './Slanted'

const IntroText = () => {
  return (
    <Slanted className="overlap">
      <div className="purple">
        <p>
          Ik ben Yorrick, {age('1999-03-03')} jaar oud en derdejaars student web
          development aan de HAN in Arnhem. Momenteel ben ik bezig met mijn 
          verdiepende semester, hier breid ik mijn kennis op het gebied van C# en
          .NET verder uit. Gelijktijdig werk ik aan een project waar ik onderzoek
          doe naar het gebruik van artificial intellingence bij het begeleiden van
          studenten in hun propedeuse. Het uiteindelijke doel is om succesfactoren
          en knelpunten te herkennen.
        </p>
      </div>
    </Slanted>
  )
}

const age = dob =>
  Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10)

export default IntroText
