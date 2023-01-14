/* eslint-disable */
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate,Outlet, useParams } from "react-router-dom";
import Detail from "./Detail.js";
function App() {
  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
 

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            <Nav.Link onClick={()=>{ navigate('/') }} >Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} >Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (ele, i) {
                    return <Modal shoes={shoes} index={i} />;
                  })}
                </div>
                <button onClick={()=>{
                  let copy = [...shoes];
                  copy.sort((a,b)=> a.title.toLowerCase()< b.title.toLowerCase() ? -1 : 1);
                  setShoes(copy)
                  // console.log(copy,shoes)
                }}>정렬</button>
              </div>
            </>
          }
        />
        <Route 
          path="/detail/:id"
          element={<Detail shoes={shoes}/>}
        />
        
        <Route path="/event"  element={ <Event/> } >  
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>

        <Route path='*' element={<div>ddd</div>} />
      </Routes>
        
    </div>
  );
}
function Event(){

  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Modal(props) {
  return (
    <div className="col-md-4">
      <img alt="" src={`https://codingapple1.github.io/shop/shoes${props.shoes[props.index].id + 1}.jpg`} width="80%" />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].content}</p>
    </div>
  );
}

export default App;
