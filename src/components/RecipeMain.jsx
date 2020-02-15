import React from 'react'




const RecipeMain = (props) => {
    return(
        <div className="row">
            <div className="col s12">
                <div className="card horizontal cyan accent-4">
                    <div className="card-image valign-wrapper ">
                        <img src={props.info.mealNameThumb} alt="Imagen de receta"/>
                    </div>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12">
                                    <h4>{props.info.mealName}</h4>
                                </div>
                            <div className="col s12">
                                <p>Informacion de receta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12">
                
            </div>
        </div>
    )
}

export default RecipeMain;