import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../Redux/paginationSlice';
import { getresp_for_page, null_resp_for_page } from '../Redux/apiobj';

function Pagination() {
    const dispatch = useDispatch();
    const { page, limit } = useSelector(store => store.pagination);
    const { resp } = useSelector(store => store.apiobj);

    const handlePrev = () => {  // Previous Button
        if (page > 1) {
            dispatch(null_resp_for_page());
            dispatch(getresp_for_page({ start: (page - 2) * 10, end: (page - 1) * 10 }));
            dispatch(prevPage());
            window.scrollTo({       //Smooth Scrolling
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }

    const handleNext = () => {  // Next Button
        function find_end(st) {
            if (resp.length < (st + 10)) {
                return 'ALL';
            }
            return st + 10;
        }
        if (page < limit) {
            dispatch(null_resp_for_page());
            dispatch(getresp_for_page({ start: (page) * 10, end: find_end((page) * 10) }));
            dispatch(nextPage());
            window.scrollTo({       // Smooth Scrolling
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }

    return (
        <>
            <div className="join">
                <button className="join-item btn" onClick={handlePrev}>«</button>
                <button className="join-item btn">Page {page}</button>
                <button className="join-item btn" onClick={handleNext}>»</button>
            </div>
        </>
    )
}

export default Pagination