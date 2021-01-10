import { types } from "../types/types";
import moment from "moment";

const initialState = {

    events:[{
        title: 'cumpleñaos jej',
        start: moment().toDate(),
        end: moment().add(3,"hour").toDate(),
        bgcolor: "#fafafa",
        user:{
            _id: "123",
            name:"isai"
        }
    }
    ],
    activeEvent: null
};

export const CalendarReducer =(state = initialState,action)=>{
    switch (action.type) {
       case types.eventSEtActive:
           return {
               ...state,
               activeEvent:action.payload
           }
            
            
    
        default:
            return state;
    }
}