import React, { useState } from 'react'
import closeIcon from '../../images/header/close-icon.png'
import closeIconActive from '../../images/header/close-icon — active.png'
import classes from '../../modules/navBar.module.css'
import NavCategory from './navCategory'
import { useCategory } from '../hooks/useCategory'
import { Link } from 'react-router-dom'

const initialData = { name: "" };

const OpenedNavBar = ({onToggleCatalog}) => {
   // const categories = {
   //    all: [
   //       {_id: "1", name: "Ролевые игры"},
   //       {_id: "2", name: "Кооперативные игры"},
   //       {_id: "3", name: "Игры для двоих"},
   //       {_id: "4", name: "Логические игры"},
   //       {_id: "5", name: "Игры для компаний"},
   //       {_id: "6", name: "Игры для детей"},
   //       {_id: "7", name: "Стратегические игры"}
   //    ],
   //    magic: [
   //       {_id: "8", name: "Иннистрад: Полночная Охота"},
   //       {_id: "9", name: "Иннистрад: Багровая Клятва"},
   //       {_id: "10", name: "Специальные выпуски"},
   //       {_id: "11", name: "Приключения в Забытых Королевствах"},
   //       {_id: "12", name: "Расцвет Зендикара"},
   //       {_id: "13", name: "Старые выпуски"},
   //       {_id: "14", name: "Калдхайм"},
   //       {_id: "15", name: "Kamigawa Neon Dynasty"},
   //       {_id: "16", name: "Стриксхейвен"}
   //    ],
   //    warhammer: [
   //       {_id: "17", name: "Warhammer The Horus Heresy"},
   //       {_id: "18", name: "Warhammer: Underworlds"},
   //       {_id: "19", name: "Warhammer: Underworlds"},
   //       {_id: "20", name: "Warhammer 40k"},
   //       {_id: "21", name: "Killteam"},
   //       {_id: "22", name: "Titanicus"},
   //       {_id: "23", name: "Age of Sigmar"},
   //       {_id: "24", name: "Necromunda"},
   //       {_id: "25", name: "Террейн"},
   //       {_id: "26", name: "Warcry"},
   //       {_id: "27", name: "Lord of the Rings"},
   //    ],
   //    accessories: [
   //       {_id: "28", name: "Протекторы"},
   //       {_id: "29", name: "Коврики"},
   //       {_id: "30", name: "Альбомы"},
   //       {_id: "31", name: "Мешочки"},
   //       {_id: "32", name: "Коробочки"},
   //       {_id: "33", name: "Cases"},
   //       {_id: "34", name: "Age of Sigmar"}
   //    ],
   //    paints: [
   //       {_id: "35", name: "Citadel"},
   //       {_id: "36", name: "Bosny"},
   //       {_id: "37", name: "Vallejo"},
   //       {_id: "38", name: "Zip Maket"}
   //    ],
   //    forModelling: [
   //       {_id: "39", name: "Кисти"},
   //       {_id: "40", name: "Инструменты"},
   //       {_id: "41", name: "Декорации"},
   //       {_id: "42", name: "Подставки"},
   //       {_id: "43", name: "Case"},
   //    ]
   // }
   const [hoverClose,setHoverClose] = useState(false)
   const [data, setData] = useState(initialData);
   const { categories, subcategories, isLoading } = useCategory()
   const subs = data.name ? subcategories.filter((sub)=>sub.category === data.name) : []
   const handleCategoryHover = (name) => {
      setData({name: name});
   };
   if (isLoading) {
      return "Loading..."
   }
  return (
   <>
   {/* <div className={classes.openedCatalogWrapper}> */}
      <div className={classes.openedCatalog}>
      <div className={classes.leftColumn}>
         <button data-bs-dismiss="offcanvas" aria-label="Close" className={classes.closeBtn} onClick={onToggleCatalog} onMouseEnter={()=>setHoverClose(true)} onMouseLeave={()=>setHoverClose(false)}>
             <img src={hoverClose ? closeIconActive : closeIcon} />
             <span className={hoverClose ? classes.closeBtnSpanHover : classes.closeBtnSpan}>Закрыть</span>
         </button>
         <ul className={classes.categories}>
                 <NavCategory link={""} name={'all'} withArrow={false} onHover={handleCategoryHover} value="Все категории" />
                 {categories.map((category) => {
                    return (
                     <NavCategory link={category._id} key={category._id + "22"} name={category._id} withArrow={true} value={category.name} onHover={handleCategoryHover}/>
                    )
                 })}
         </ul>
      </div>
         <div className={classes.rightColumn}>
            {data.name ? 
            <div className={classes.center}>
            <div className='container text-center'>
            <ul className='row row-cols-4 mw-100 '>
            {subs.map((subcategory)=>(
               <div className={classes.gg}>
               <li key={subcategory._id} className={"col mb-5 " + classes.hh}>
                  <Link to={`/catalog/${subcategory.category}/${subcategory._id}`} className={classes.navLinks} href="#">
                     {subcategory.name}
                  </Link>
               </li>
                </div>
            ))}
            </ul>
            </div>
            </div>
             : null}
         </div>
      </div>
    {/* </div> */}
 </>
  )
}

export default OpenedNavBar