import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>:{props.alert.msg}
    </div> }
   </div>
    
//   props.alert && evaluates props.alert and && operator does and operation. Hence if props.alert=NULL at some point Alert.js won't return anything
  )
}

export default Alert
