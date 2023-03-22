import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const EditNews = () => {
    const [author_first_name, first_name_change] = useState('');
    const [author_last_name, last_name_change] = useState('');
    const [news_message, news_change] = useState('');
    const navigate = useNavigate();

const updateNews = (e) => {
        e.preventDefault();
        const news_obj = { author_first_name, author_last_name, news_message };
        console.log(news_obj);

        fetch("http://localhost:8000/news", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(news_obj)
        }).then(res => {
            toast.success('News posted successfully');
            navigate('/news');
        }).catch((err) => {
            console.log(err.message);
        });
    }
    return (
        <div class="container col-md-8 mt-5">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">All News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Recently</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">News Form</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">News Form</h5>
                    <form class="text-center" onSubmit={updateNews}>
                        <div class="row">
                            <div class="col">
                                <input type="text" value={author_first_name} onChange={e => first_name_change(e.target.value)} class="form-control" placeholder="Author first name"></input>
                            </div>
                            <div class="col">
                                <input type="text" value={author_last_name} onChange={e => last_name_change(e.target.value)} class="form-control" placeholder="Author last name"></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="form-group">
                                <textarea class="form-control" value={news_message} onChange={e => news_change(e.target.value)} id="exampleFormControlTextarea1" rowsF="3" placeholder="News area"></textarea>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary float-end">Add News</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default EditNews;