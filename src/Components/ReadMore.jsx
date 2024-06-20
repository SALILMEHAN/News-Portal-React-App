import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReadMore({ data, p }) {
    const navigate = useNavigate();
    const modalId = `modal_${data.title}`;

    const handle_go_to_page = () => {
        navigate(`/article/${p}`)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <button className="btn btn-primary" onClick={() => document.getElementById(modalId).showModal()}>Read More</button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{data.title}</h3>
                    <h2 className="mt-2 font-semibold">Author: {data.author || '-NOT GIVEN-'}</h2>
                    <h2 className="font-semibold">Source: {data.source.name || '-NOT GIVEN-'}</h2>
                    <p className="py-4">{data.content}</p>
                    <button className="btn btn-primary" onClick={handle_go_to_page}>Go To Page</button>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-primary ml-10">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default ReadMore;
