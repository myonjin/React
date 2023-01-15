import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : black;
//   padding : 10px;
// `

// let Box = styled.div`
//   background : grey;
//   padding : 20px;
// `

function Detail(props) {
  let [two, setTwo] = useState(false);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let copy = props.shoes.find((ele) => ele.id == id);
  let [inputData, setInputData] = useState('');

  useEffect(() => {
    console.log(count,'return아닌거')
    let a = setTimeout(() => {
      setTwo(true);
    }, 2000)
    return()=>{
      clearTimeout(a) // 기존 타이머 다 없애주기위함
      console.log(count,'처음은 실행되면 안되는디? ')
    }
  }, [count]);
  useEffect(()=>{
    if (isNaN(inputData) === true){
      alert('그러지마세요')
    }
  },[inputData])
  

  // let 찾은상품 = props.shoes.find(function (x) {
  //   return x.id == id
  // })
  // console.log(copy)
  return (
    <div className="container">
      <button
        onClick={() => {
          setCount(count + 1);
          
        }}
      >
        버튼
      </button>
      {/* <Box>
            <YellowBtn bg='blue'>버튼</YellowBtn>
            </Box> */}
      {two === false ? <div className="alert alert-warning">2초뒤에 사라질걸요</div> : null}
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <input onChange={(e)=>{setInputData(e.target.value)}} type="text"/>
        
        <div className="col-md-6">
          <h4 className="pt-5">{copy.title}</h4>
          <p>1</p>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
