import React, { useState, useEffect } from "react";
import CatalogSortCategorias from "./catalogSortCategorias";
import CatalogSortRanges from "./catalogSortRanges";
import CatalogSortingTimeToPlay from "./catalogSortTimeToPlay";
import classes from "../../modules/catalog.module.css"

const CatalogSort = () => {
    const [data, setData] = useState(
        {
            price: {min: 20, max: 47000},
            countPlayers: {min: 2, max: 6},
            age: {min: 6, max: 18},
            time: [
                {name: "10", value: 10, checked: false},
                {name: "30", value: 30, checked: false}
            ]
        })
    const handleChange = (name, content) => {
        setData((prevState)=>({...prevState, [name]:content}))
    }
    const handleSubmit = () => {
        console.log(data);
    }
    return (
        <>
            <CatalogSortCategorias/>
            <CatalogSortRanges name={"price"} title="Цена" rouble={true} initialState={{min: 20, max: 47000}} data={data.price} onChange={handleChange}/>
            <CatalogSortRanges name={"countPlayers"} title="Кол-во игроков" rouble={false} initialState={{min: 2, max: 6}} data={data.countPlayers} onChange={handleChange}/>
            <CatalogSortRanges name={"age"} title="Возрастное ограничение" rouble={false} initialState={{min: 6, max: 18}} data={data.age} onChange={handleChange}/>
            <CatalogSortingTimeToPlay name={"time"} data={data.time} onChange={handleChange}/>
            <div className={classes.catalogViewWrapper}>
                <button onClick={handleSubmit} className={classes.catalogViewButton}>
                    <span className={classes.catalogViewSpan}>Показать</span>
                </button>
            </div>
            
        </>
    )
}
 
export default CatalogSort;

//  <div className=" accordion">
//             {/* <div className="card-body"> */}
//             <div class="accordion-item">
//                 <h2 class="accordion-header" id="flush-headingOne">
//                     <button onClick={toggleDisplay} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                         Accordion Item #1
//                     </button>
//                 </h2>
//                 <div className="collapse " ref={collapseRef} id={"flush-collapseOne"}>
//                 <Accordeon/>
//             </div>
//             </div>
            
//                 {/* </div> */}
//             </div>