import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { UseLoading,LoadingComponet } from './useLoading'
const Products:React.FC = () => {
    const {enqueueSnackbar} = useSnackbar()
    const [products, setProducts] = useState<any>('')
const {loading,startLoading,stopLoading}=UseLoading()
    useEffect(() => {
        const fetchProduct = async() => {
            try {
                startLoading()
const data = await axios.get('/products')
setProducts(data)
            } catch (err) {
                console.log(err)
                enqueueSnackbar("",{variant:"error"})
            }finally{
                stopLoading()
            }        }
           
          fetchProduct()
    },[startLoading,stopLoading])
    return (
        <div>
            {
                loading?(<LoadingComponet/>): (
                    Products.length>0? (<h2>no products found</h2>):(
                        products.map((product:any)=>{
            <ul key={product.id}>
            
            </ul>}
                )))}
                        
           
        
        </div>
    )
}

export default Products