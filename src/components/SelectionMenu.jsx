import React , { Component } from 'react';
import Selector from './Selector';
import RecipeMain from './RecipeMain';

// informacioncd
import recipes from '../utils/recipes'




class SelectionMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allrecipies: [],
            addRecipes: false,
            id: 0
            
        }
        this.addRecipes = this.addRecipes.bind(this);

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
        this.state.id= getRandomInt(0, 11) 

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
                        <Selector clickHandle={this.addRecipes} />
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