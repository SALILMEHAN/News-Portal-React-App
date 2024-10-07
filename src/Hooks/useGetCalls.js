import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getresponse, reset_resp_for_page } from '../Redux/apiobj';
import { getlimit } from '../Redux/paginationSlice';

function fetchApiResponse(topic) {
    const dispatch = useDispatch();

    useEffect(()=>{
        (async () => {
            try {                
                // API Calling
                const res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-09-07&to=2024-09-07&sortBy=popularity&apiKey=6e5b111406984a3ba7ebc4496c3e4077`, {
                    method: 'GET'
                });
                const data = await res.json();
                // Filtering Out The Null Data
                const d=[];

                for(let i=0;i<data.articles.length;i++){
                    if(data.articles[i].urlToImage!=null){
                        d.push(data.articles[i]);
                    }
                }
                dispatch(getresponse(d));
                dispatch(reset_resp_for_page());
                const lim=d.length/10;
                dispatch(getlimit(Math.ceil(lim)));
                return d;
            } catch (error) {
                console.log(error);
            }
        })();
    },[topic]);
}

export default fetchApiResponse;
