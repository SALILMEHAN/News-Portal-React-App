import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
    const { id } = useParams();
    const { resp_for_page } = useSelector(store => store.apiobj);
    const data = resp_for_page[id];

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 className='font-extrabold text-4xl'>{data.title}</h1>
                <div style={styles.meta} className='mt-4'>
                    <span>By {data.author || '[NOT GIVEN]'}</span>
                    <span> | </span>
                    <span>{data.publishedAt || '[NOT GIVEN]'}</span>
                    <span> | </span>
                    <span>{data.source.name}</span>
                </div>
            </header>
            <article style={styles.article}>
                <img src={data.urlToImage} alt={data.title} className='my-16' />
                <p className='font-semibold'>{data.description}</p>
                <br />
                <p>{data.content || '[NOT GIVEN]'}</p>
                <br />
                <p><a href={data.url} className='text-blue-700' target='_blank'>Click Here to go to External Link</a></p>
            </article>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        lineHeight: '1.6',
        color: '#333'
    },
    header: {
        borderBottom: '1px solid #ddd',
        marginBottom: '20px',
        paddingBottom: '10px'
    },
    meta: {
        fontSize: '14px',
        color: '#999'
    },
    article: {
        marginTop: '20px'
    }
};

export default NewsPage;
