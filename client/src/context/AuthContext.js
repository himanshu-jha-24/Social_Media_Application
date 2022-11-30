import { createContext, useEffect, useReducer } from "react"
import AuthReducer from './AuthReducer'
const localData=localStorage.getItem('user')
const INITIAL_STATE={
    
    user:localData?JSON.parse(localData):null,
    // user:{
    //     _id:"62ac6496818b8a2688ea01db",
    //     username:"himanshujha24",
    //     email:"jhahimanshu24@gmail.com",
    //     profilePicture:"",
    //     coverPicture:"",
    //     followers:[],
    //     followings:[],
    //     isAdmin:false
    // },
    isFetching:false,
    error:false,
}
export const AuthContext=createContext(INITIAL_STATE)

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state])
    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}