import React, { useEffect, useState } from 'react'

const ExDiceGame = () => {

  const [UserDice, setUdice] = useState(0)
  const [ComDice, setCdice] = useState(0)
  const [UserScore, setUserScore] = useState(0)
  const [ComScore, setComScore] = useState(0)
  const [rdice, setRdice] = useState("")

  let img = [
    "./src/img/dice1.png",
    "./src/img/dice2.png",
    "./src/img/dice3.png",
    "./src/img/dice4.png",
    "./src/img/dice5.png",
    "./src/img/dice6.png"
  ]

  const btn = () => {
    let userNum = Math.floor(Math.random() * 6)
    let comNum = Math.floor(Math.random() * 6)

    setUdice(userNum)
    setCdice(comNum)

    if (userNum > comNum) {
      setUserScore(UserScore + 1)
    } else if (userNum < comNum) {
      setComScore(ComScore + 1)
    }
  }

  useEffect(() => {
    if (UserScore > 9) {
      setRdice("유저 승리")
    } else if (ComScore > 9) {
      setRdice("컴퓨터 승리")
    }
  }, [UserScore, ComScore])

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={btn}>Start</button>

      <div>
        <img src={img[UserDice]}  />
        <h1>User Score : {UserScore}</h1>
      </div>

      <div>
        <img src={img[ComDice]}  />
        <h1>Com Score : {ComScore}</h1>
      </div>

      <h1>결과 : {rdice}</h1>
    </div>
  )
}

export default ExDiceGame
