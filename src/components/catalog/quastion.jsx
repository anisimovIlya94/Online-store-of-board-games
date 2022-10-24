import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import CatalogQuastion from "./catalogQuastion";
import ProductQuastion from "../product/productQuastion";

const Quastion = ({type, ...rest}) => {
    const [display, setDisaplay] = useState(false);
    const collapseRef = useRef();
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
        type === "catalog"
            ? <CatalogQuastion collapseRef={collapseRef} toggleDisplay={toggleDisplay} display={display} {...rest} />
            : <ProductQuastion collapseRef={collapseRef} toggleDisplay={toggleDisplay} display={display} {...rest} />
     );
}
 
export default Quastion;