import { useState } from 'react';


export const GifExpertApp = () => {
  
    const [categories, seTcategories] = useState(['One Punch', ' dragon ballZ']);

    console.log(categories)
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* imput */}


        {/* listado de gifs */}
        <ol>
          {
          categories.map(category => {
            return<li key={category}>{category}</li>
          })
          }
        </ol>

        {/* git item */}
    </>
    
  )
}
