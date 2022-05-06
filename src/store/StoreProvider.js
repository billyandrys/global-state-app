import React , { createContext, useReducer, useContext } from 'react'
import  storeReducer, { intialState } from './StoreReducer'

export const StoreContext = createContext()


const StoreProvider = ({ children })=>{
     const [store, dispatch] = useReducer(storeReducer, intialState)
    return (
        <StoreContext.Provider value={[store, dispatch]}>
                {children}
        </StoreContext.Provider>

    )
}

export const useStore = ()=>useContext(StoreContext)[0]
export const useDispatch =()=>useContext(StoreContext)[1]

export default StoreProvider
