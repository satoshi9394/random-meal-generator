import React , { Component } from 'react';


// informacioncd
import contactsData from '../utils/recipes'



class SelectionMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipies: [],
            
        }
        this.addContact = this.addContact.bind(this);

    }
    addContact(){
        this.setState(
            () => ({contacts: contactsData,}
            )
        );       
    }


    render() {
/*         const card = this.state.contacts.map((contact, idx) => 
        <ContactCard info={contact}  key={idx}/> );

        let viewCard ;

        if (this.state.contacts.length > 0) {
            viewCard = <div>{card}</div>
        }else if(this.state.deleteContact === true){
            viewCard = <h1>Borraste los contactos</h1>
        }else{
            viewCard = <h1>No hay contactos</h1>     
        } */



        return (
            <div className='container'>
                <div className="row">
                    <div className="col s9">
                        <h1>hola aqui ira la receta</h1>
                    </div>
                    <div className="col s3">
                        <div className="row">
                            <h2>y aqui ira el boton random</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectionMenu;