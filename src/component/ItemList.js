import React from 'react'

const ItemList = ({itemName}) => {
  return (
    <div 
    style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}
    >
        <div>
             <input type='checkbox'></input>
        </div>
        <div>
            <p>{itemName}</p>
        </div>
        <div>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default ItemList;
