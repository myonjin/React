/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {
  let Name = '안녕하시나요'
  let [글제목1,a]=useState(['남자','가자','트젠'])
  let [글제목2,b]=useState('글제목1')
  let [글제목3,c]=useState('글제목1')
  let [따봉,따봉변경]=useState(0);
  let [modal,setModal] = useState(false);
  return (
    <div className="App">
      <div>
        <h1 style={{color : 'red', fontSize:'15px' }}>{Name}</h1>
      </div>
      <h1>{글제목1}</h1>
      <button onClick={()=>{
        // let copy = [...글제목1] ...은 벗겨주는거
        let copy = [...글제목1];
        copy.sort()
        a(copy);
        console.log(copy,글제목1);

      }}>클릭</button>
      <p>{글제목1[2]}</p>
      <span onClick={()=>{b('글제목바뀜!!')}}>물어</span>
      <br/>
      <span onClick={()=>{따봉변경(따봉+1)}}>눌러</span>{따봉}
      <Modal></Modal> 
      {

      }
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날씨</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
