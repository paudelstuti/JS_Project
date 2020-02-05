import React from 'react'
export default ({pagination,setPagination,recipes}) =>{
    const prevClick = () => {
        if (pagination === 0) {
            return;
        }

        setPagination(pagination -10);
    }
    const nextClick = () =>{
       setPagination(pagination+10);
    }
    return(
           <div className="container">
               <div className="row" style={{display: "flex" , flexWrap:"wrap"}}>
               {recipes.map(({recipe}) =>(
                   <div className="col s13 m3 l3">
                           <div className="card">
                               <div className="card-image waves-effect waves-block waves-light">
                                   <img
                                       className="activator"
                                       src={recipe.image}
                                       alt="img"/>
                               </div>
                               <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                {recipe.label}<i className="material-icons right">more_vert</i>
                            </span>
                                   <p>Click Here</p>
                               </div>
                               <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">
                                {recipe.label}<i className="material-icons right">close</i>
                            </span>
                                   <ul>
                                       {recipe.ingredientLines.map(ingredient=><li>{ingredient}</li> )}
                                   </ul>

                               </div>
                           </div>
                   </div>

                       ))}
                   </div>
            <p onClick={prevClick}>Prev</p>
               <p onClick={nextClick}>Next</p>
           </div>
    );
};