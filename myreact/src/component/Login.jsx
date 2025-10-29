import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useState} from 'react'
  

const Login = () => {
  const [inputId, setInputId] = useState("")
  const [inputPw, setInputPw] = useState("")

  const nav = useNavigate();
  // 사용자가 입력한 ID : smhrd , PW : 123 
  // 일때만 Home 으로 이동
  // 둘중 하나라도 다르다면 '잘못 입력
  const btnLogin = () => {

    inputId
    inputPw

    if(inputId === "smhrd" && inputPw === "123"){
      nav('/')
    }
    else if(inputId =="" || inputPw ==""){
      alert("입력하십쇼")
    }
    else{
      alert("틀렸습니당")
    }
  }
  return (
    <div>
        <h1>즐거운 React 수업</h1>
      아이디: <input onChange={(e) =>setInputId(e.target.value)}></input>
      <br></br>
      비밀번호 : <input onChange={(e) => setInputPw(e.target.value)}></input>
      <br></br>
       <button onClick={btnLogin}>Login</button>
       
    </div>
  )
}

export default Login