import React, { useState } from 'react'
import classes from "../../../modules/catalog.module.css"
import Navigation from '../../navigation';
import MainCard from '../../main/mainCard';
import CatalogSort from '../../catalog/catalogSort';
import { paginate } from '../../../utils/paginate';
import Pagination from '../../catalog/pagination';
import Quastion from '../../catalog/quastion';

const CatalogPage = () => {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
  const handleOpen = () => {
    setOpen(!open)
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
};
  const count = ids.length
  const pageSize = 12
  const usersCrop = paginate(ids, currentPage, pageSize);
    return (
        <>
        <div className={classes.catalogBanner}>
          <p className={classes.catalogBannerTitle}>Октябрьский турнир Warhammer 40000</p>
          <p className={classes.catalogBannerText}>У тебя есть команда и вы готовы принять участие в турнире Warhammer 40000?  </p>
        </div>
        <Navigation/>
        <h2 className={classes.title}>Каталог продукции</h2>
        <div className={classes.catalogBody}>
            <div className={classes.catalogSorting}>
              <CatalogSort/>
          </div>
            <div className={"container text-center "}>
                <div className={'row row-cols-3 ' + classes.catalogTable}>
                  {usersCrop.map((id)=>{
                    return <div className={"col " + classes.catalogCard} key={id}>
                    <MainCard price={id}/>
                  </div>
                  })}
                </div>
            </div>
        </div>
              <Pagination 
                itemCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}/>
                <div style={{margin: "50px 0"}}>
              <Quastion type="catalog" title="Какие игры сейчас самые популярные?" text="Warhammer, Magic"/>
              <Quastion type="catalog" title="Как выбрать настольную игру?" text={"Если в настольной игре собирается принять участие компания, нужно учитывать средний возраст игроков. Есть игры, которые не требуют активности и вряд ли понравятся молодёжи, а подвижные не придутся по душе пожилым людям. Многие игры предназначены только для большого количества участников, а другие — строго для двоих. Бывают и индивидуальные варианты, но чаще всего количество участников — от двух до четырёх.Количество игроков, на которое рассчитана игра, написано на её упаковке. Важно сразу решить, сколько человек примут участие в игре. Некоторые настольные игры могут быть скучны только для двоих. Если чаще будут играть именно двое, не стоит покупать игры, которые рассчитаны на большую компанию. Важно и то, как участники будут взаимодействовать между собой во время игры. Есть два основных варианта: каждый сам за себя или в команде.Реквизитом могут быть карты, игральные кости, бумага и карандаши, а также специальные приспособления, которые лежат в коробке. Выделяют несколько типов настольных игр: интеллектуальные, творческие, подвижные и кооперативные.Интеллектуальные больше предназначены для детей, которым надо развивать логику и эрудицию. В формате развлечений они смогут тренировать память и мышление. К таким играм относятся мемо, где надо запоминать картинки или слова.Стратегические и экономические развивают навыки предпринимателя и стратега. Они учат грамотному планированию.Творческие игры развивают воображение. Они требуют большей концентрации. Подвижные игры больше понравятся компаниям, потому что направлены на взаимодействие между игроками. В кооперативной игре ребёнок будет развивать речь и коммуникативные навыки с помощью общения с другими игроками. Игры выбирают и по длительности процесса: от нескольких минут до нескольких часов.Время игры также зависит от количества участников и от того, насколько они хорошо знают правила."}/>
              </div>
        </>
      );
}
 
export default CatalogPage;