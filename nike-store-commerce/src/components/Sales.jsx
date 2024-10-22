import React from 'react'
import Title from './utils/Title.jsx'
import Item from './utils/Item.jsx'


const Sales = ({endpoint:{title,items}}) => {
 
  return (
    <div>
        <Title title={title}/>
        <div>
          {items?.map((item,i)=>(
            <Item {...item} key={i}/>
          ))}
          
        </div>
    </div>
  )
}

export default Sales
