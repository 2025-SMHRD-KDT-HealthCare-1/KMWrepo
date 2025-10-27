import React from 'react'
import {useState} from 'react'

const Ex08 = () => {
    const [mySrc, setSrc] = useState('./src/img/sa.png')
    const [num, setNum] = useState(0)

    let sa = './src/img/sa.png'
    let st = "./src/img/st.jpg"
    let nd = "./src/img/noodle.jpg"

    let array = [sa,st,nd]
    const ntImg = () => {
        if(num==2){
            setNum(0)
        }
        else{
            setNum(num+1)
        }
        }
    const prImg = () => {
        if(num==0){
            setNum(2)
        }
        else{
            setNum(num-1)
        }
    }
  return (
    <div>
        <img src={array[num]}></img>
        <button onClick={prImg}>이전</button>
        <button onClick={ntImg}>다음</button>
    </div>
  )
 }


export default Ex08