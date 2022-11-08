import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import categories from "../../fakeAPI/categories";
import Accordeon from "./catalogAccordeon";
import classes from "../../modules/catalog.module.css"
import { Link } from "react-router-dom";


const CatalogSortCategorias = () => {
const [display, setDisaplay] = useState(true);
    const [displayName, setDisplayName] = useState('')
    const collapseRef = useRef();
    const handleDisplayName = (name) => {
        if(name !== displayName){
            setDisplayName(name);
        } else {
            setDisplayName('')
        }
        
    }
    const toggleDisplay = () => {
        setDisaplay((prevState) => !prevState);
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

    return (
        <div style={{border: "1px solid #fff"}} className={"card my-2 " + classes.catalogSortWrapper}>
            <div className={"card-body " + classes.borderBottom}>
                <div className={"d-flex justify-content-between " + classes.allCategoriasButton}>
                    <Link className={classes.accordeonNavlinkAll} to={"/catalog"}>{"Все категории"}</Link>
                    <i
                        className={
                            "bi bi-caret-" +
                            (!display ? "down-fill" : "up-fill")
                        }
                        onClick={toggleDisplay}
                        role={"button"}
                    ></i>
                </div>
                <div className="collapse" ref={collapseRef} id={"name" + "title"}>
                    {categories.map((category) => {
                        return <Accordeon key={category._id} name={category._id} onDisplay={handleDisplayName} displayName={displayName} title={category.name}/>
                    })}
                    {/* <Accordeon name="1" onDisplay={handleDisplayName} displayName={displayName} title="Настольные игры"/>
                    <Accordeon name="2" onDisplay={handleDisplayName} displayName={displayName} title="Magic: The Gathering"/>
                    <Accordeon name="3" onDisplay={handleDisplayName} displayName={displayName} title="Варгеймы"/>
                    <Accordeon name="4" onDisplay={handleDisplayName} displayName={displayName} title="Краски"/>
                    <Accordeon name="5" onDisplay={handleDisplayName} displayName={displayName} title="Аксессуары для игр"/>
                    <Accordeon name="6" onDisplay={handleDisplayName} displayName={displayName} title="Аксессуары для моделизма"/> */}
                </div>
            </div>
        </div>
    );
}
    export default CatalogSortCategorias;