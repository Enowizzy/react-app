/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const News = () => {
    const [news_lists$, news_update$] = useState([]);
    const navigate = useNavigate();

    const deleteNews = (code) => {
        if (window.confirm('Are you sure you want to delete this news')) {
            fetch('http://localhost:8000/news/' + code, {
                method: "DELETE"
            }).then(res => {
                toast.success('News Deleted Successfully');
                navigate(0);
            }).catch((err) => {
                console.log(err.message)
            });
        }
    }
    useEffect(() => {
        fetch('http://localhost:8000/news').then(res => {
            return res.json();
        }).then(resp => {
            news_update$(resp);
        }).catch((err) => {
            console.log(err.message)
        });
    }, [])
    return (
        <div class="container col-md-10 justify-content-center mt-3">
            <h2>News Page</h2>
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        news_lists$.map((news_list$) => (
                            <tr key={news_list$.id}>
                                <td>{news_list$.id}</td>
                                <td>{news_list$.author_first_name}</td>
                                <td>{news_list$.author_last_name}</td>
                                <td>
                                    <Link to={"/admin/view-news/" + news_list$.id} className="btn btn-primary me-2">View</Link>
                                    <Link to={"/admin/edit-news/" + news_list$.id} className="btn btn-warning me-2">Edit</Link>
                                    <a onClick={() => { deleteNews(news_list$.id) }} className="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default News;