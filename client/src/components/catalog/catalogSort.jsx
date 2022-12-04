import React, { useState, useEffect } from "react";
import CatalogSortCategorias from "./catalogSortCategorias";
import CatalogSortRanges from "./catalogSortRanges";
import CatalogSortingTimeToPlay from "./catalogSortTimeToPlay";
import { useCatalog } from "../hooks/useCatalog";
import classes from "../../modules/catalog.module.css"
import { useDispatch, useSelector } from "react-redux";
import { editFilters, getFilters } from "../../store/catalog";

const CatalogSort = () => {
    // const { filters, handleChangeFilters } = useCatalog()
    const filters = useSelector(getFilters())
    const dispatch = useDispatch()
    const [data, setData] = useState(filters)
    const handleChange = (name, content) => {
        setData((prevState)=>({...prevState, [name]:content}))
    }
    const handleSubmit = () => {
        dispatch(editFilters(data))
    }
    return (
        <>
            <CatalogSortCategorias/>
            <CatalogSortRanges name={"currentPrice"} title="Цена" rouble={true} initialState={{min: 20, max: 47000}} data={data.currentPrice} onChange={handleChange}/>
            <CatalogSortRanges name={"quantity"} title="Кол-во игроков" rouble={false} initialState={{min: 2, max: 6}} data={data.quantity} onChange={handleChange}/>
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