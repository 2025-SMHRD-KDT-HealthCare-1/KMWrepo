import React, { useState } from 'react'


const Ex03 = () => {
  const [MyNum, setMyNum] = useState(null)
  const [ComNum, setComNum] = useState(null)
  const [Result, setResult] = useState("")

  const btn = (num) => {
    setMyNum(num)

    const random = Math.floor(Math.random() * 3) + 1
    setComNum(random)

    if (num === random) {
      setResult("정답 ")
    } else {
      setResult("땡 ")
    }
  }

  return (
    <div>
      <button onClick={() => btn(1)}>1</button>
      <button onClick={() => btn(2)}>2</button>
      <button onClick={() => btn(3)}>3</button>

      <div>
        <p>내가 입력한 숫자: {MyNum}</p>
        <p>컴퓨터 랜덤 숫자: {ComNum}</p>
        <p>결과: {Result}</p>
      </div>
    </div>
  )
}

export default Ex03



//React에서는 일반 변수, State변수
//State변수 : 바뀐값으로 출력할 수 있는 변수
//          -> useState를 통해서 만들 수 있다 -> import

// const ExNumber = () => {
//     let num = 0;
//     const [number,setNumber] = useState(0);
//     // number : State 값을 가지는 변수
//     // setNumber : state값을 바꿀 수 있는 함수


//     const plus = () =>{
//         num++
//         setNumber(number+1)
//         //number라는 State값을 바꾼다
//         // --> 바뀐값으로 출력하겠다
//         // --> ExNumber(현재 컴포넌트)를 재실행시킨다-> 일반변수는 초기값으로 돌아감

           // setState 함수 특징 : close 함수이다 
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={plus}>더하기</button>
//         </div>
//     )
// }


