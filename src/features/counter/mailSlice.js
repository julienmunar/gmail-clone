import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
sendMessageOpen:false,
selectedMail:null
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail:(state,action)=>{
      state.selectedMail=action.payload;
    },
    // OPEN---CLOSE MESSAGE BOX
    openSendMessage: (state) => {state.sendMessageOpen=true; },
    closeSendMessage: (state) => {state.sendMessageOpen=false;  },
  
  }
})
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.


export const { openSendMessage, closeSendMessage,selectMail} = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageOpen;
export const selectedMailData=(state)=>state.mail.selectedMail;


export default mailSlice.reducer;
