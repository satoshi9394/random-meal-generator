import React from 'react'
import ReactPlayer from 'react-player'




const RecipeMain = (props) => {

    let ingrediente = props.info.ingredientes

    return(
        <div className="row cyan accent-4">
            <div className="col s12">
                <div className="card horizontal row justy-align cyan accent-4">
                    <div className="card-image valign-wrapper col s6 ">
                        <img src={props.info.mealNameThumb} id="imgrecipe" alt="Imagen de receta"/>
                    </div>
                        <div className="card-content col s6">
                            <div className="row">
                                <div className="col s12 center-align">
                                    <h4>{props.info.mealName}</h4>
                                </div>
                            <div className="col s12 left-align">
                                <p>{props.info.instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12">
                <div className="row left-align cyan accent-4">
                    <div className="col s12">
                        <h4>{props.info.mealCategory}</h4>
                    </div>
                    <div className="col s12">
                        <h4>Ingrendientes</h4>
                        <ul>
                            <li>{props.info.measure1} - {props.info.ingredient1}</li>
                            <li>{props.info.measure2} - {props.info.ingredient2}</li>
                            <li>{props.info.measure3} - {props.info.ingredient3}</li>
                            <li>{props.info.measure4} - {props.info.ingredient4}</li>
                            <li>{props.info.measure5} - {props.info.ingredient5}</li>
                            <li>{props.info.measure6} - {props.info.ingredient6}</li>
                            <li>{props.info.measure7} - {props.info.ingredient7}</li>
                            <li>{props.info.measure8} - {props.info.ingredient8}</li>
                            <li>{props.info.measure9} - {props.info.ingredient9}</li>
                            <li>{props.info.measure10} - {props.info.ingredient10}</li>
                            <li>{props.info.measure11} - {props.info.ingredient11}</li>
                            <li>{props.info.measure12} - {props.info.ingredient12}</li>
                            <li>{props.info.measure13} - {props.info.ingredient13}</li>
                            <li>{props.info.measure14} - {props.info.ingredient14}</li>
                            <li>{props.info.measure15} - {props.info.ingredient15}</li>
                            <li>{props.info.measure16} - {props.info.ingredient16}</li>
                            <li>{props.info.measure17} - {props.info.ingredient17}</li>
                            <li>{props.info.measure18} - {props.info.ingredient18}</li>
                            <li>{props.info.measure19} - {props.info.ingredient19}</li>
                            <li>{props.info.measure20} - {props.info.ingredient20}</li>
                        </ul>
                    </div>
                    <div className="col s12">
                        <ReactPlayer
                        url={props.info.mealVideo}
                        className='react-player'
                        playing
                        width='100%'
                        height='100vh'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeMain;