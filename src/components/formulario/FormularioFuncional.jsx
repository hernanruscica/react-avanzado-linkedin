import React, {useState} from 'react'


const  Formulario = () => {
    const [ items, setItems ] = useState({name: ''})    

    const onSubmitHandler = (e) =>  {
        e.preventDefault();        
        console.log(Object.keys(items));
    }
    const onInputChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;    
        setItems((prevState) =>  ({...prevState, [name] : value}) );                
    }   
    
    return (
      <>
        <div className="formularios col-md-5">
          <form action="" onSubmit={onSubmitHandler}>
            <h2>Formulario</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={onInputChangeHandler}
                placeholder="nombre"
              />
              <input
                type="text"
                className="form-control"
                name="surname"
                onChange={onInputChangeHandler}
                placeholder="apellido"
              />
              <input
                type="text"
                className="form-control"
                name="hobby"
                onChange={onInputChangeHandler}
                placeholder="hobby"
              />
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
        <h2>Datos del formulario</h2>
        <ul>            
            {
                Object.keys(items).map((key) => (
                    <li className='text-left' key = { key } >
                        {key} : {items[key]}
                    </li>
                ))
            } 
           
        </ul>
      </>
    );
}

export default Formulario