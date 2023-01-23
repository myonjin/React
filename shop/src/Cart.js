import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./store";


function Cart() {
  
  let state = useSelector((state)=>{return state})
  // console.log(a);
  let dispatch = useDispatch()

  return (
    <div>
          {state.user.name} {state.user.age}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
        {
          state.jang.map((ele,i ) => 
            <tr key={i}>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.count}</td>
            <td><button onClick={()=>{
              dispatch(addCount(state.jang[i].id))
              
            }}>+</button></td>
          </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
