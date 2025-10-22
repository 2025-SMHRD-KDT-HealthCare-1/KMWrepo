import React from 'react'



const MyDate = () => {

    // 현재 시간 가져오기
    let day = new Date();
    console.log(day)

    let myYear = day.getFullYear();
    let myMonth = day.getMonth()+1;
    let myDay = day.getDate();
    let season = ""

   let name = prompt("이름을 말해주세요")
   if(myMonth<=5 && myMonth>=3){
        season = "봄"
   }
   else if(myMonth<=8 && myMonth>=6){
        season = "여름"

   }
   else if(myMonth<=11 && myMonth>=9){
        season = "가을"

   }
    else {
        season = "겨울"

   }



  return (
    <div>
    <h1>{myYear}년 {myMonth}월 {myDay}일</h1>
    <hr></hr>
    <p>{name}님 지금은 {season}계절입니다. 좋은하루 보내세요!</p>
    </div>
  )
}

export default MyDate