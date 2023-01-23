import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import {context1} from './App.js'
import { addItem } from "./store.js";
import { useDispatch,useSelector } from "react-redux";
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

  let {jae,shoes} = useContext(context1)

  let [two, setTwo] = useState(false);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let copy = props.shoes.find((ele) => ele.id == id);
  let [inputData, setInputData] = useState("");
  let [tab,setTab] = useState(0);
  let [fade,setFade] = useState('');
  let state = useSelector((state)=>{return state})
  // console.log(a);
  let dispatch = useDispatch()

  useEffect(() => {
    console.log(tab)
    let a = setTimeout(() => {
      setTwo(true);
    }, 2000);
    return () => {
      clearTimeout(a); // 기존 타이머 다 없애주기위함
     
    };
  }, [tab]);
  useEffect(() => {
    if (isNaN(inputData) === true) {
      alert("그러지마세요");
    }
  }, [inputData]);

  useEffect(()=>{
    setTimeout(() => {
      setFade('alertEnd')
    }, 100);
  return setFade('')
  },[tab])

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
      {two === false ? <div className={"alert alert-warning alertStart "+fade}>2초뒤에 사라질걸요</div> : null}
      <div className="row">
        <div className="col-md-6">
          
          <img src={`https://codingapple1.github.io/shop/shoes${copy.id+1}.jpg`} width="100%" />
        </div>
        <input
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          type="text"
        />

        <div className="col-md-6">
          <h4 className="pt-5">{copy.title}</h4>
          <p>1</p>
          <p>상품설명</p>
          {/* let 꺼낸거 = {JSON.stringify(copy)} */}
          {/* JSON.parse(꺼낸거) */}
          <p>120000원</p>
          <button className="btn btn-danger" 
          onClick={()=>{
            console.log(state.jang)
            dispatch(addItem({id:1, name:'dd', count:1}))
            // dispatch(addItem({id:`${copy.id}`, name:`${copy.title}`, count:1}))
          }}>주문하기</button>
        </div>
      </div>
      
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0); }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1); }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2); }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
        <TabComponent  tab={tab}/>
        {/* {
          {0:<div>내용0</div>,
           1:<div>내용1</div>,
           2:<div>내용2</div>}[tab]
        
        } */}
    </div>
  );
}
function TabComponent({tab}) {
  let [fade,setFade] = useState('end');
  useEffect(()=>{
    setTimeout(() => {
      setFade('end')
    },100);
    return setFade('')
  },[tab])
  return (  <div className={'start '+ fade}>
        { [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][tab] }
  </div>)


//   if (tab == 0 ){
//     return <div className="start end">내용1</div>
// } else if( tab == 1){
//   return <div className="start end" >내용 2</div>
// } else if ( tab == 2 ){
//   return <div className="start end" > 내뇽 3</div>
// }

}

export default Detail;
