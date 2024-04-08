import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Fetch(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 12;

    const fetchData = async () => {
        try {
            const url = props.category
                ? `https://newsapi.org/v2/top-headlines?q=${props.searchNews}&country=in&category=${props.category}&apiKey=68f216a2b4604beb81b9ce77ac1eb8cc&page=${page}&pageSize=${pageSize}`
                : `https://newsapi.org/v2/top-headlines?country=in&apiKey=68f216a2b4604beb81b9ce77ac1eb8cc&page=${page}&pageSize=${pageSize}`;
            const res = await axios.get(url);
            setData(res.data.articles);
            setTogit add README.mdtalResults(res.data.totalResults);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.categories, props.searchNews, page]);

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <div>
            <div className='container-fluid text-white bg-dark d-flex justify-content-center align-items-center flex-column' style={{ height: "30vh" }}>
                <h4 style={{ fontSize: "40px", color: "orangered" }}>NEWS Hub</h4>
                <h5>THE WEBSITE BUILD WITH THE NEWS API</h5>
                <div>
                    <marquee>TOP HEADLINES</marquee>
                </div>
            </div>

            <h3 className="container my-4 alert bg-dark text-white text-center">TOP HEADLINES</h3>
            <div className='container my-4'>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border custom-spinner" role="status"></div><br />
                        <span className="text-center" style={{ fontSize: "20px", fontWeight: "bolder" }}>Loading....</span>
                    </div>
                ) : (
                    <div className='row'>
                        {data.map((items, index) => (
                            <div key={index} className='col-md-4'>
                                <div className='container my-3 p-3' style={{ boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                                    <h5><u>{items.source.name}</u></h5>
                                    <h5>{items.title?.slice(0, 60)}...</h5>
                                    <div className='d-flex justify-content-center align-items-center flex-column my-3'>
                                        <img src={items.urlToImage || "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/breaking-news-template-1-1709432359.jpg"} alt='News Image' className='img-fluid' style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                                    </div>
                                    <h5>{items.author?.slice(0, 30) || "headlines news today"}</h5>
                                    <p>{items.content?.slice(0, 35) || "headlines news today"}...</p>
                                    <h6>{items.description?.slice(0, 35) || "headlines news today"}...</h6>
                                    <p>{items.publishedAt}</p>
                                    <a href={items.url} target='blank' role="button" className='btn btn-primary mt-3'>View More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="container d-flex justify-content-between mt-5 mb-5">
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="btn btn-success mt-3 ml-1"><i className="fa fa-chevron-circle-left" style={{ fontSize: "18px", marginRight: "5px" }} ></i>Previous</button>
                <div className="pagination-container d-flex align-items-center">
                    {[...Array(Math.ceil(totalResults / pageSize)).keys()].map((num) => (
                        <button key={num + 1} onClick={() => handlePageChange(num + 1)} className={`btn ${page === num + 1 ? "btn-primary" : "btn-light"} mt-3 mx-1`}>{num + 1}</button>
                    ))}
                </div>
                <button onClick={() => handlePageChange(page + 1)} disabled={page >= Math.ceil(totalResults / pageSize)} className="btn btn-danger mt-3">Next <i className="fa fa-chevron-circle-right" style={{ fontSize: "18px", margin: "3px" }} ></i></button>
            </div>
        </div>
    );
}

export default Fetch;