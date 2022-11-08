import React, { useState } from 'react'
import closeIcon from '../../images/header/close-icon.png'
import closeIconActive from '../../images/header/close-icon — active.png'
import classes from '../../modules/navBar.module.css'
import NavCategory from './navCategory'

const initialData = { name: "" };

const OpenedNavBar = ({onToggleCatalog}) => {
   const categories = {
      all: [
         {_id: "1", name: "Ролевые игры"},
         {_id: "2", name: "Кооперативные игры"},
         {_id: "3", name: "Игры для двоих"},
         {_id: "4", name: "Логические игры"},
         {_id: "5", name: "Игры для компаний"},
         {_id: "6", name: "Игры для детей"},
         {_id: "7", name: "Стратегические игры"}
      ],
      magic: [
         {_id: "8", name: "Иннистрад: Полночная Охота"},
         {_id: "9", name: "Иннистрад: Багровая Клятва"},
         {_id: "10", name: "Специальные выпуски"},
         {_id: "11", name: "Приключения в Забытых Королевствах"},
         {_id: "12", name: "Расцвет Зендикара"},
         {_id: "13", name: "Старые выпуски"},
         {_id: "14", name: "Калдхайм"},
         {_id: "15", name: "Kamigawa Neon Dynasty"},
         {_id: "16", name: "Стриксхейвен"}
      ],
      warhammer: [
         {_id: "17", name: "Warhammer The Horus Heresy"},
         {_id: "18", name: "Warhammer: Underworlds"},
         {_id: "19", name: "Warhammer: Underworlds"},
         {_id: "20", name: "Warhammer 40k"},
         {_id: "21", name: "Killteam"},
         {_id: "22", name: "Titanicus"},
         {_id: "23", name: "Age of Sigmar"},
         {_id: "24", name: "Necromunda"},
         {_id: "25", name: "Террейн"},
         {_id: "26", name: "Warcry"},
         {_id: "27", name: "Lord of the Rings"},
      ],
      accessories: [
         {_id: "28", name: "Протекторы"},
         {_id: "29", name: "Коврики"},
         {_id: "30", name: "Альбомы"},
         {_id: "31", name: "Мешочки"},
         {_id: "32", name: "Коробочки"},
         {_id: "33", name: "Cases"},
         {_id: "34", name: "Age of Sigmar"}
      ],
      paints: [
         {_id: "35", name: "Citadel"},
         {_id: "36", name: "Bosny"},
         {_id: "37", name: "Vallejo"},
         {_id: "38", name: "Zip Maket"}
      ],
      forModelling: [
         {_id: "39", name: "Кисти"},
         {_id: "40", name: "Инструменты"},
         {_id: "41", name: "Декорации"},
         {_id: "42", name: "Подставки"},
         {_id: "43", name: "Case"},
      ]
   }
   const [hoverClose,setHoverClose] = useState(false)
   const [data, setData] = useState(initialData);
   const handleCategoryHover = (name) => {
      setData({name: name});
   };
  return (
   <>
   {/* <div className={classes.openedCatalogWrapper}> */}
      <div className={classes.openedCatalog}>
      <div className={classes.leftColumn}>
         <button className={classes.closeBtn} onClick={onToggleCatalog} onMouseEnter={()=>setHoverClose(true)} onMouseLeave={()=>setHoverClose(false)}>
             <img src={hoverClose ? closeIconActive : closeIcon} />
             <span className={hoverClose ? classes.closeBtnSpanHover : classes.closeBtnSpan}>Закрыть</span>
         </button>
         <ul className={classes.categories}>
             <NavCategory name={'all'} withArrow={false} onHover={handleCategoryHover} value="Все категории"/>
            <NavCategory name={'all'} withArrow={true} value="Настольные игры" onHover={handleCategoryHover}/>
            <NavCategory name={'magic'} withArrow={true} value="Magic:the Cathering" onHover={handleCategoryHover}/>
            <NavCategory name={'warhammer'} withArrow={true} value="Warhammer 4000" onHover={handleCategoryHover}/>
            <NavCategory name={'accessories'} withArrow={true} value="Акссесуары для игр" onHover={handleCategoryHover}/>
            <NavCategory name={'paints'} withArrow={true} value="Краски" onHover={handleCategoryHover}/>
            <NavCategory name={'forModelling'} withArrow={true} value="Акссесуары для моделизма" onHover={handleCategoryHover}/>
         </ul>
      </div>
         <div className={classes.rightColumn}>
            {data.name ? 
            <div className={classes.center}>
            <div className='container text-center'>
            <ul className='row row-cols-4 mw-100 '>
            {categories[data.name].map((category)=>(
               <div className={classes.gg}>
               <li key={category._id} className={"col mb-5 " + classes.hh}>
                  <a className={classes.navLinks} href="#">
                     <span>{category.name}</span>
                  </a>
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