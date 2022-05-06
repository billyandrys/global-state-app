import React, { useContext} from 'react'

import {StoreContext} from '../store/StoreProvider'
import { type } from '../store/StoreReducer'



function MyComponent() {

const [store, dispatch]  = useContext(StoreContext)

const { user, products} = store
 
  return (
    <div>
        <h1>Name {user?.name}</h1>
        <button onClick={()=>dispatch({type:type.authLogin, payload:{id:1, name:'Luis'}})}>
            login
        </button>
        <button onClick={()=>dispatch({type:type.authLogout })}>
            logout
        </button>

        <h2>Products</h2>
        <ul>
            {products.map(product=><li key={product.id}>{product.title}</li>)}
        </ul>
        
        <button onClick={()=>dispatch({type:type.productDeleteAll})}>
            Delete all
        </button>
        <button onClick={()=>dispatch({type:type.productChange})}>
            Change
        </button>

    </div>
  )
}

export default MyComponent