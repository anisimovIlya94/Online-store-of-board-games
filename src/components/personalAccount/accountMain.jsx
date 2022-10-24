import React from 'react'
import classes from "../../modules/account.module.css"
import AccountUserCard from './accountUserCard';
import AccountUserRangs from './accountUserRangs';
import MainCardButton from '../main/buttons/mainCardButton';
import MainCard from '../main/mainCard';
import AccountUserInfo from './accountUserInfo';

const AccountMain = () => {
    let status;
  const bought = 0;
  if (bought <= 5000) {
    status = {name:"Новичок", discount: '5%', color: '#CD7F32', background: 'linear-gradient(#573716, #2A2A2A)'}
  } else if (bought > 5000 && bought <= 10000) {
    status = {name:"Любитель", discount: '10%', color: '#c0c0c0', background: 'linear-gradient(#5e5e5e, #2A2A2A)'}
  } else {
    status = {name:"Профессионал", discount: '15%', color: '#ffd700', background: 'linear-gradient(#877200, #2A2A2A)'}
  }
  const procent = bought > 10000 ? 100 : Math.floor((bought / 10000) * 100);
  const events = [
    {
      id: "ev1",
      name: "dragons",
      label: "Игры по DungeonsDragons",
      date: "25 октября 2022 года, 17:00",
      img: "event1",
    },
    {
      id: "ev2",
      name: "nightGames",
      label: "Вечер настольных игр",
      date: "10 ноября 2022 года, 19:00",
      img: "event2",
    },
    {
      id: "ev3",
      name: "Warhammer",
      label: "Турнир Warhammer 40000",
      date: "19 октября 2022 года, 17:00",
      img: "event3",
    },
  ];
  const recommendations = [
    { id: "rc1" },
    { id: "rc2" },
    { id: "rc3" },
    {id: "rc4"},
  ]
    return ( 
        <div className={classes.accountMainInfo}>
          <div className={classes.accountUserInfo}>
            {/* <div>
              <img
                className={classes.accountPhoto}
                src={require("../../images/account/account-photo.jpg")}
                alt=""
              />
              <span className={classes.userName}>Анисимов Илья</span>
            </div> */}
          <AccountUserInfo/>
            <div>
              <span className={classes.icon}>
                <i className="bi bi-check-lg"></i>
              </span>
              <span className={classes.userStatus}>{status.name}</span>
            </div>
          </div>
          <div className={classes.accountUserCard}>
            <p className={classes.userCardTitle}>Карта лояльности</p>
            <div className={classes.accountUserCardWrapper}>
              <div className={classes.userCard}>
                <AccountUserCard status={status} />
              </div>
              <div className={classes.userRangs}>
                <AccountUserRangs bought={bought} />
              </div>
            </div>
            <div className={classes.shoppingLineWrapper}>
              <div className={classes.shoppingLine}>
                <div
                  className={classes.shoppingOrangeLine}
                  style={{ width: `${procent}%` }}
                ></div>
              </div>
              <p className={classes.totalPurchased}>{bought}/10000</p>
            </div>
            <div className={classes.allEventsWrapper}>
              <p className={classes.userCardTitle}>Мои мероприятия</p>
              {events.map((event) => {
                return (
                  <div key={event.id} className={classes.myEventsWrapper}>
                    <div className="d-flex">
                      <img
                        className={classes.myEventImage}
                        src={require(`../../images/account/${event.img}.png`)}
                        alt=""
                      />
                      <div className={classes.myEventInfo}>
                        <p className={classes.myEventInfoTitle}>
                          {event.label}
                        </p>
                        <p className={classes.myEventInfoDate}>{event.date}</p>
                      </div>
                    </div>
                    <div className={classes.myEventsButton}>
                      <MainCardButton
                        title={"Подробнее"}
                        orange={false}
                        back="#fcf3ed"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p className={classes.userCardTitle}>Рекомендуем для вас</p>
              <div className={classes.recommendedWrapper}>
                <div className="container text-center">
                  <div className="row row-cols-3">
                    {recommendations.map((rec) => {
                      return (
                        <div
                          key={rec.id}
                          className={"col " + classes.recomendation}
                        >
                          <MainCard />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default AccountMain;