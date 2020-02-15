import React , { Component } from 'react';
import Selector from './Selector';
import RecipeMain from './RecipeMain';

// informacioncd
import recipes from '../utils/recipes'
//botones
import Btn from '../actions/Btn';




class SelectionMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allrecipies: [],
            previwId: 0,
            addRecipes: false,
            id: 0
            
        }
        this.addRecipes = this.addRecipes.bind(this);
        this.returnRecipes = this.returnRecipes.bind(this);

    }
    addRecipes(){
        this.setState(
            () => ({
                allrecipies: recipes,
                addRecipes: true
                }
            )
        ); 
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
        this.state.previwId = this.state.id;  
        this.state.id= getRandomInt(0, 11) 

    }

    returnRecipes(){
        this.setState(
            () => ({
                    id: this.state.previwId,
                }
            )
        ); 
        console.log('entre al return')
        console.log(this.state.id)
    }


    render() {


        let viewRecipes ;

        if (this.state.addRecipes === true) {
            viewRecipes = <RecipeMain info={this.state.allrecipies[this.state.id]}/>
        }else{
            viewRecipes = <div className="style= display:none"></div>
        }

        console.log(this.state.Allrecipies)
        console.log(this.state.id)


        
        

        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12">
                        <Selector  />
                        <div className="col s6">
                            <Btn clickHandle={this.addRecipes} type="Obtener receta" icon="cached"/>
                        </div>
                        <div className="col s6">
                            <Btn clickHandle={this.returnRecipes} type="Retroceder" icon="keyboard_return" />
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="row">
                            {viewRecipes}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectionMenu;