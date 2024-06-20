import React from 'react'
import NewsBlock from './NewsBlock'
import { useSelector } from 'react-redux'
import fetchApiResponse from '../Hooks/useGetCalls';
import Pagination from './Pagination';

function NewsArea({ type }) {
    const resp = fetchApiResponse(type);
    const { resp_for_page } = useSelector(store => store.apiobj);

    return (
        <div className='z-0 flex flex-col items-center'>
            <div className='flex flex-row flex-wrap m-2 justify-center' id="news">
                {
                    resp_for_page
                        ? resp_for_page?.map((item, key) => {
                            return (
                                <>
                                    <NewsBlock item={item} key={key} p={key} />
                                </>
                            )
                        })
                        : <span className="loading loading-ring loading-lg my-56"></span>
                }
            </div>
            <Pagination />
        </div>
    )
}

export default NewsArea