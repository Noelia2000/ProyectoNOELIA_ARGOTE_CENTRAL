// import { Fragment } from "react"
// const newMessage={
//   message:'Hola Mundo',
//   title:'Noelia'
// };

import PropTypes from 'prop-types';

export const FirstApp=({title, subTitle, name})=>{


  //  console.log(props);




return(
  <>
  <h1 data-testid="test-title">{title}</h1>
  {/* <code>{JSON.stringify(newMessage)}</code> */}
  <p> {subTitle}</p>
  <p> {subTitle}</p>
  <p> {name}</p>
  
  </>
)

}

FirstApp.propTypes={
  title:PropTypes.string.isRequired,
  subTitle: PropTypes.string,

}

FirstApp.defaultProps = {
  name:'Noelia Argote',
  subTitle:'No hay sub titulo',
  // title:'No hay titulo',
}