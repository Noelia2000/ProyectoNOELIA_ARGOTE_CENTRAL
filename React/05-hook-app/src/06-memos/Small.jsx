import React from 'react';
// import{memo} from 'react';

export const Small = React.memo (({value}) => {

    console.log('Me volvi a generar :(');
  return (
     <small>{value}</small>
  )
})
