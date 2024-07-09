import React from "react";
import './confirmacion.css';

const Confirmacion = (props) => {    
  
    return (
        <div className="myModal-background">
            <div className="myModal">
                <span>texto del modal</span>
                <button onClick={ props.onClick }>Click para cerrar</button>
            </div>
        </div>
    );
  }

  export default Confirmacion;
