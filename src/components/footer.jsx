import React from 'react'
import classes from '../modules/footer.module.css'
import logo from '../images/header/header-logo.png'
import FooterLink from './footerLink'
import mir from '../images/footer/Mir.png'
import visa from '../images/footer/Visa.png'
import master from '../images/footer/cart_master.svg'
import VkLogo from './vkLogo'
import ModalWindow from './modalWindow/modalWindow'
import AccountQuestions from './personalAccount/accountQuestions'

const Footer = () => {
  return (
   <footer className={classes.footer}>
         <div className={classes.upDetail}>
            <div className="container text-center mw-100">
               <div className="row align-items-start ">
                  <div className="col">
                     <div className={classes.iconAndAdress}>
                        <img src={logo} />
                        <p className={classes.adress}>г. Москва ст.м. Таганская Малый Дровяной переулок 6</p>
                     </div>
                  </div>
                  <div className="col">
                     <div className={classes.catalog}>
                        <FooterLink name='Каталог' styles={classes.link} />
                        <FooterLink name='Настольные игры' styles={classes.miniLink} />
                        <FooterLink name='Warhammer 40000' styles={classes.miniLink} />
                        <FooterLink name='Аксессуары для игр' styles={classes.miniLink} />
                        <FooterLink name='Краски' styles={classes.miniLink} />
                        <FooterLink name='Аксессуары для моделизма' styles={classes.miniLink}/>
                     </div>
                  </div>
                  <div className="col">
                     <div className={classes.links}>
                        <FooterLink name='Правила клуба' styles={classes.link}/>
                        <FooterLink name='Мероприятия' styles={classes.link}/>
                        <FooterLink name='О нас' styles={classes.link}/>
                        <FooterLink name='Контакты' styles={classes.link}/>
                        <FooterLink name='Блог' styles={classes.link}/>
                     </div>
                  </div>
                  <div className="col">
                     <div className={classes.links}>
                        <FooterLink name='Оплата и доставка' styles={classes.link}/>
                        <FooterLink name='Гарантия и возврат' styles={classes.link}/>
                     </div>
                  </div>
                  <div className="col-auto">
                     <div className={classes.contacts}>
                        <div className={classes.orderCall}>
                           <button type="button" data-bs-toggle="modal" data-bs-target="#question"  style={{background: "inherit"}}>
                              <span className={classes.orderCallStyle}>Заказать звонок</span>
                          </button>
                          {<ModalWindow id="question">
                             <AccountQuestions modal={true}/>
                          </ModalWindow>}
                        </div>
                        <div className={classes.text}>
                           <p>+7 (495) 911-10-11</p>
                           <p>msk@magicgoldfish.ru</p>
                        </div>
                        <VkLogo/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div>
      <div className='d-flex mw-100 mt-5 d-flex justify-content-between'>
         <div>
            <ul>
               <li className={classes.downText}>© 2022 MagicGoldFish.ru</li>
                  <li>
                     <a href="#">
                        <span className={classes.downLink}>Политика конфеденциальности</span>
                     </a>
                  </li>
               </ul>                 
         </div>
         <div className={classes.middle}>
            <img src={mir} alt="" />
            <img className={classes.visa} src={visa} alt="" />
            <img src={master} alt="" />
         </div>
            <div>
               <ul className={classes.right}>
                  <li className={classes.downText}>Содержимое не является публичной офертой</li>
                  <li>
                     <a href="#">
                        <span className={classes.downLink}>Пользовательское соглашение</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </footer>
  )
}

export default Footer