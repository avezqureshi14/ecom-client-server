import React from 'react'
import { useEffect } from 'react';
const Category = ({filterItem, catList}) => {

  return (
    <>
    <div class="categories_avez">
    <ul>
       <li id="reload-button" onClick={()=>filterItem("All")}  class="one cur">All</li> 
        {
            catList.map((currEle)=>{
                return (
                    <li onClick={()=>filterItem(currEle)} class="one cur">{currEle}</li>
                )
            })
        }
    </ul>
</div>
    </>
  )
}

export default Category