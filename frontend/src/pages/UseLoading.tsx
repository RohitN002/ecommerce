import React, { useCallback,  useState } from 'react'

 export const UseLoading = () => {
    const [loading,setLoading]=useState<boolean>(false)

    
        loading ? <h3> loading...</h3>:<h1>loading</h1>
    const startLoading=useCallback(()=>setLoading(true),[])
    const stopLoading=useCallback(()=>setLoading(false),[])




  
  return {
    loading,
    startLoading,
    stopLoading
}
}

// export default UseLoading

export const LoadingComponet:React.FC = () => {
  return (
    <>
        <h3>loading..</h3>
    </>
  )
}

