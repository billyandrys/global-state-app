export const type = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout',
    productDeleteAll: 'product - delete all',
    productChange: ' product - change'

}

export const intialState = {
    user:{id:1, name: 'Luis'},
    products:[
        {id:1, title: 'product # 1'},
        {id:2, title: 'product # 2'}
    ]
}
const storeReducer =(state, action)=>{
    switch(action.type){
        case type.authLogin:
            return {...state,
                user:action.payload
            }
        case type.authLogout:
            return {
                ...state,
                user:null
            }
        case type.productDeleteAll:
            return {
                ...state,
                products:[]
            }
        case type.productChange:
            return {...state,
               products: [{id:3, title: 'Products # 3'}]
            }
        default:
            return state
    }
}

export default storeReducer