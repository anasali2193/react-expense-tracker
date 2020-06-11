import React ,{createContext ,useReducer} from 'react';
import AppReducer from './AppReducer';
//Initial state
const initialState={
    transactions:[
        { id: 1, text: 'Salary', amount: 20 },
    
    ]
}

//create Context 
export const GlobalContext= createContext(initialState);

//provider components 
export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // Actions 
    function deleteTransaction(id){
        dispatch({
            type :'DELETE_TRANSACTION',
            payload : id
        })
    }
    
    function addTransaction(transaction){
        dispatch({
            type :'ADD_TRANSACTION',
            payload : transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,


        }}>
            {children}
        </GlobalContext.Provider>
    );
}