import { configureStore, createSlice } from "@reduxjs/toolkit"
import jellyInfoSlice from "./jellyInfo";

//회원정보 데이터 전역 관리
let userInformation = createSlice({
    name : 'userInformation',
    initialState : {},
    reducers : {
        userInformationIn(state,action){
            // console.log(action.payload)
            state += Object.assign(state,action.payload)
        }
    }
});

export let { userInformationIn } = userInformation.actions;

//작성한 젤리 후기 정보 전연관리

export default configureStore({
    reducer : {
        userInformation : userInformation.reducer,
        jellyInfo : jellyInfoSlice.reducer,
    }
})
