import { useEffect, useState } from "react"
 

const UseEffectHook = () => {

const [count, setCount] = useState(0)
useEffect(() => {
   console.log("componentdismounth+ componentdidupdates")
    setTimeout(() => {
      alert("data fetched")  
    }, 3000);
}, [count])

// useEffect(() => {
//     console.log("componentdismounth+ componentdidupdates")
//      setTimeout(() => {
//        alert("data fetched")  
//      }, 3000);
//  }, [count])

const handleInc = ()=>{
    setCount(count+1)
}
console.log("render")

  return (
    <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT ={count}</h3>
        <button className="bbtn btn-info" onClick={handleInc}>INC</button>
    </div>
  )
}

export default UseEffectHook
