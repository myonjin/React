/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {
  let Name = '안녕하시나요'
  let [글제목1,a]=useState(['남자','가자','트젠'])
  let [글제목2,b]=useState('글제목1')
  let [글제목3,c]=useState('글제목1')
  let [따봉,따봉변경]=useState([0,0,0]);
  let [title,setTitle]=useState(0);
  let [modal,setModal] = useState(false);
  let [입력값,입력값변경] = useState('');

 
  // console.log(따봉)

  return (
    <div className="App">
      <div>
        <h1 style={{color : 'red', fontSize:'15px' }}>{Name}</h1>
      </div>
      <h1>{글제목1}</h1>
      <h3>{입력값}</h3>
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
      <span onClick={()=>{따봉변경(따봉[0]+1)}
      
      }>눌러</span>{따봉[0]}
      <br />
      <Modal color={'skyblue'} 글제목={글제목1} 글제목변경={a} index={title}></Modal> 
      <br />
      <button onClick={() => {setModal(!modal)}}>모달창</button>
      <br />
      
      <input onChange={(e)=>{입력값변경(e.target.value)}}/>
      <button onClick={()=>{
        let copy= [...글제목1]
        copy.push(입력값)
        a(copy);
        let copy_dda=[...따봉]
        copy_dda.push(0)
        따봉변경(copy_dda)
        }}>글발행</button>



      <div className='list'>
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <br />
      <br />
      {
        글제목1.map(function (ele,i) {
          return (
            <div className='list'>
                <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{글제목1[i]} <span onClick={(e)=>{
                  e.stopPropagation()
                  let copy = [...따봉]
                  copy[i]++
                  따봉변경(copy)
                }}>눌러</span>{따봉[i]}</h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let copy= [...글제목1]
                  copy.splice(i,1)
                  a(copy);
                 }}>삭제</button>
            </div>
          )          
        })
      }
      {
        modal == true ? <Modal color={'yellow'} 글제목={글제목1}  글제목변경={a} index={title} /> : null
      }
      <button onClick={() =>{
        a([...글제목1,'추가'])
        따봉변경([...따봉,0])
      }}>추가</button>

  


    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
        <h4>{props.글제목[props.index]}</h4>
        <p>날씨</p>
        <p>상세내용</p>
        <button onClick={()=>{
          props.글제목변경(['안녕','변경','하이'])
        }}>글수정</button>
    </div>
  )
}

export default App;
