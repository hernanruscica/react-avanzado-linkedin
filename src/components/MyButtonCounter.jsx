const MyButtonCounter = (props) => {       

  console.log(props)
  
    if (!props.counterName) throw new Error("Error en componente MyButtonCounter");
      return (      
        <div>
          <button onClick={ props.incrementCount }>{ props.counterName } en {props.count}</button>
        </div>
      )
        
  }
  export default MyButtonCounter;