import React, { useState } from 'react'
import ItemList from './ItemList';

const Inputconatiner = () => {

  const [itemsbuy , setItemsBuy] = useState([]);

  const [textInput , setTextInput ] = useState("")

  const onclickhandler = () => {
    setItemsBuy((preData) => {
      return [...preData, textInput]
    })

    setTextInput("")
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }} >

     <div 
      style={{
        backgroundColor: 'red',
        padding: '35px'
      }}
     >
        <h2>Gocery Bud</h2>
        <div>
          <input type='text' 
           value={textInput}
           onChange={(e) => {
            setTextInput(e.target.value)
           }}
          ></input>
          <button onClick={onclickhandler} >Add Item</button>
        </div>

        <div>
        {itemsbuy.map((elem, index) => <ItemList itemName={elem} key={index} />)}
      </div>

      </div>

    </div>
  )
}

export default Inputconatiner
