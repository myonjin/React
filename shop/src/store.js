import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "User",
  initialState: {name:'kim', age:20},
  reducers:{
    changeName(state){
      state.name = 'park '
    },
   changeAge(state,a){
      state.age += a.payload
      console.log(a)
    }
  }
});

export let {changeName,changeAge} = user.actions

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let jang = createSlice({
  name: "jang",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers:{
    addCount(state, action){
      let idex =state.findIndex((ele)=> {return ele.id == action.payload})
      state[idex].count++
    },
    addItem(state,action){
      state.push(action.payload)
      console.log(state)
    }
  
  }
});

export let {addCount,addItem} = jang.actions 



export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    jang: jang.reducer,
  },
});
