import React, { useEffect, useRef } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import classes from "../../modules/catalog.module.css"

const Accordeon = ({displayName, onDisplay, name, title}) => {
    const display = name === displayName;
    const collapseRef = useRef();
    const toggleShow = () => {
            onDisplay(name)
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

    return (
        <div className={"card my-2 "} style={{border: "1px solid #fff"}}>
            <div className="card-body">
                {/* <button> */}
                <div className={"d-flex justify-content-between "+ classes.sortingCategorias}>
                    {<a className={classes.sortingCategoriasAncer} href="#">{title}</a>}
                    <i
                        className={
                            "bi bi-caret-" +
                            (!display ? "down-fill " : "up-fill ") + classes.buttonIcon
                        }
                        onClick={toggleShow}
                        role={"button"}
                    ></i>
                </div>
                <div className="collapse" ref={collapseRef} id={"name" + "title"}>
                    {"children"}
                </div>
                {/* </button> */}
                
            </div>
        </div>
    );
}
 
export default Accordeon;

{/* <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button onClick={()=>handleStatus("flush-headingTwo")} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Accordion Item #4
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div> */}