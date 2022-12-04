import React, { useContext, useState, useEffect } from "react";
import recomendationsService from "../services/recomendations.service";

const RecomendationsContext = React.createContext();

export const useRecomendations = () => {
  return useContext(RecomendationsContext);
};

const RecomendationsProvider = ({ children }) => {
    const [timeToBuy, setTimeToBuy] = useState([]);
    const [specialOffers, setSpecialOffers] = useState([]);
    const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getRecomendationsList();
  }, []);
  // useEffect(() => {
  //   console.log(timeToBuy);
  // }, [timeToBuy]);
    const getRecomendationsList = async () => {
        try {
            const { content: timeToBuyContent } = await recomendationsService.getTimeToBying()
            const { content: specialOffersContent } = await recomendationsService.getSpecialOffers()
            // console.log(timeToBuyContent)
            setTimeToBuy(timeToBuyContent)
            setSpecialOffers(specialOffersContent)
            setTimeout(() => {
                setLoading(false)
              },100)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChangeTimeToBuy = async (data) => {
        try {
            const { content } = await recomendationsService.changeTimeToBying(data)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChangeSpecialOffers = async (data) => {
        try {
            const { content } = await recomendationsService.changeSpecialOffers(data)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <RecomendationsContext.Provider
            value={{
                timeToBuy,
                specialOffers,
                isLoading,
                handleChangeTimeToBuy,
                handleChangeSpecialOffers
          }}
        >
          {children}
        </RecomendationsContext.Provider>
      );
    };
    
    export default RecomendationsProvider;