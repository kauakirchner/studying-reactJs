import { useState } from 'react'
import Form from './components/Form'
import LearnState from './components/LearnState'
import RendCondicional from './components/RendCondicional'


const  App = () => {
  return (
    <div className="App">
      <RendCondicional />
      <Form />
    </div>
  )
}

export default App
