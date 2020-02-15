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
            previwId: [],
            addRecipes: false,
            id: [],
            noMoreRecipies: false,
            
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
        function save(x, y) {
            return y = y.push(x); 
        }
        
        
        this.state.id= getRandomInt(0, 11) 
        save(this.state.id, this.state.previwId) 

    }

    returnRecipes(){
        this.setState(
            () => ({
                    id: this.state.previwId[this.state.previwId.length-1],
                }
            )
        ); 
        function rRecipies( y) {
            return y = y.pop(); 
        }
        if(this.state.previwId.length > 1){
            rRecipies(this.state.previwId)
        }else{
            this.state.noMoreRecipies = true
        }
        console.log('entre al return')
        console.log(this.state.id)
    }


    render() {


        let viewRecipes ;
        let messenge;

        if (this.state.addRecipes === true && this.state.noMoreRecipies===false) {
            viewRecipes = <RecipeMain info={this.state.allrecipies[this.state.id]}/>
            messenge = <div className="style= display:none"></div>
        }else if(this.state.noMoreRecipies===true){
            this.state.noMoreRecipies = false;
            viewRecipes = <RecipeMain info={this.state.allrecipies[this.state.id]}/>
            messenge = <h3 className="red darken-3">No hay mas recetas previas</h3>
        }else{
            viewRecipes = <div className="style= display:none"></div>
            messenge = <div className="style= display:none"></div>
        }

        console.log(this.state.Allrecipies)
        console.log(this.state.id)
        console.log(this.state.noMoreRecipies)


        
        

        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12">
                        <Selector  />
                    <div className="row">
                        <div className="col s6">
                            <Btn clickHandle={this.addRecipes} type="Obtener receta" icon="cached"/>
                        </div>
                        <div className="col s6">
                            <Btn clickHandle={this.returnRecipes} type="Retroceder" icon="keyboard_return" />
                        </div>
                    </div>
                    </div>
                    <div className="col s12">
                        {messenge}
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