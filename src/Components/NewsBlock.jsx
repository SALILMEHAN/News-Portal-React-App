import React from 'react'
import ReadMore from './ReadMore';

function NewsBlock(props) {
    const data = props.item;
    const key = props.p;

    return (
        <div className='m-4'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={data.urlToImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <ReadMore data={data} p={key} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock