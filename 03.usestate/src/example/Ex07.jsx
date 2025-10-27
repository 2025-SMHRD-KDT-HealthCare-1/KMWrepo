import React from 'react'
import { useState , useRef } from 'react'


const Ex07 = () => {

    const inputRef = useRef();
    const [guess, setGuess] = useState("")
    const [ranNum , setRanNum] = useState(Math.floor((Math.random()*50)+1))
    console.log(ranNum)
    const btn = () => {
        let Text = inputRef.current.value
        if(Text > ranNum){
            setGuess("더 작은 수를 입력하세요")
        }
        else if(Text < ranNum){
            setGuess("더 큰 수를 입력하세요")
        }
        else{
            setGuess("정답입니다")
        }
    }
  return (
    <div>
        <h1>1~50사이 랜덤수 맞추기</h1>
        <input ref={inputRef}></input>
        <button onClick={btn}>출력</button>
        <p>출력 : {guess}</p>
    </div>
  )
}

export default Ex07