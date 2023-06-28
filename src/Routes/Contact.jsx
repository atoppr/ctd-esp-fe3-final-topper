import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

const Contact = () => {
 const {themeState} = useGlobalStates()
  return (
    
    <div  className= {themeState.className}  >
     <div className='contact'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
    </div>

      <Form/>
    </div>
  )
}

export default Contact