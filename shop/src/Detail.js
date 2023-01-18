import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
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
  useEffect(() => {
    // console.log("안녕");
  });
  let [count, setCount] = useState(0);

  let { id } = useParams();
  // let 찾은상품 = props.shoes.find(function (x) {
  //   return x.id == id
  // })
  let copy = props.shoes.find((ele) => ele.id == id);
  // console.log(copy)
  let [tab,setTab] = useState(0);

  return (
    <div className="container">
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(22);
        }}
      >
        버튼
      </button>
      {/* <Box>
            <YellowBtn bg='blue'>버튼</YellowBtn>
            </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{copy.title}</h4>
          <p>1</p>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
            {

        {
        0: <div>내용0</div>,
        1:<div>내용1</div>,
        2:<div>내용2</div>
        }[0]
      }
    </div>
  );
}

export default Detail;
