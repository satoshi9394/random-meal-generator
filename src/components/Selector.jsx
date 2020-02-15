import React from 'react';


const Selector = (props) => {
    return (
        <div className='row'>
            <div className="col s12 ">
                <h4>Que cenaremos el dia de hoy?</h4>
            </div>
            <div className="col s12">
                <h5>
                    cansado de hacer esa misma pregunta?
                </h5>
                <h6>haga click para obtener una receta al azar</h6>
            </div>
            <div className="col s12">
                <button 
                className="btn waves-effect waves-light btn-small"
                onClick={props.clickHandle}>
                    <i className="material-icons right">add</i>
                    Obtener receta
                </button>
            </div>
        </div>
    )
}

export default Selector;