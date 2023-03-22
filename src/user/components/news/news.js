import { useEffect, useState } from "react";

const News = () => {
    const [news_lists$, news_update$] = useState([]);

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
                                    <a href="view" className="btn btn-primary">View</a>
                                    <a href="edit" className="btn btn-warning">Edit</a>
                                    <a href="delete" className="btn btn-danger">Delete</a>
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