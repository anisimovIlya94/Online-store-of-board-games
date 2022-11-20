import { useState, useEffect } from "react";
// import category from "../mockData/categories.json"
// import subcategory from "../mockData/subCategories.json"
// import product from "../mockData/products.json"
import timeToBuy from "../mockData/timeToBuy.json"
import httpServices from "../components/services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not started",
        pending: "In process",
        successed: "Ready",
        error: "Error occured"
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const summaryProgress = timeToBuy.length;
    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summaryProgress) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };
    useEffect(() => {
        updateProgress();
    }, [count]);
    const initialize = async () => {
        try {
            // for (const cat of category) {
            //     await httpServices.put("category/" + cat._id, cat);
            //     setCount((prevState) => prevState + 1);
            // }
            // for (const sub of subcategory) {
            //     await httpServices.put("subcategory/" + sub._id, sub);
            //     setCount((prevState) => prevState + 1);
            // }
            for (const prod of timeToBuy) {
                await httpServices.put("specialOffers/" + prod._id, prod);
                setCount((prevState) => prevState + 1);
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    };
    return { error, initialize, progress, status };
};
export default useMockData;
