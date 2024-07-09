import React, {Component} from 'react'





class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: props.name,
            surname: props.surname,
            hobby: props.hobby
        }
    }    

    onSubmitHandler = (e) =>  {
        e.preventDefault();
        console.log(this.state.name, this.state.surname, this.state.hobby);
    }
    onInputChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;    
        this.setState({ [name] :  value })                
    }
    render() {
    return (
        <>
            <div className="formularios col-md-5">
            <form action="" onSubmit={ this.onSubmitHandler }>
                <h2>Formulario</h2>
                <div className="form-group" > 
                    <input type="text" 
                        className='form-control'
                        name='name'
                        onChange={ this.onInputChangeHandler }
                        placeholder='nombre'/>
                    <input type="text" 
                        className='form-control'
                        name='surname'
                        onChange={ this.onInputChangeHandler }
                        placeholder='apellido'/>
                    <input type="text" 
                        className='form-control'
                        name='hobby'
                        onChange={ this.onInputChangeHandler }
                        placeholder='hobby'/>
                    <button className='btn btn-primary'
                        type='submit'>Guardar                    
                    </button>
                </div>        
            </form>
            </div>
        </>
    )
    }
}

export default Formulario