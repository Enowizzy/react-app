import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
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
        <div class="container col-md-10 justify-content-center">
            <h2>1. External Stylesheet</h2>
            <p>You can create a new CSS file in your project directory and add your CSS inside it. You can then import it in your component, class or React JS page.
                The following code is used to import an external CSS stylesheet.</p>
            <h2>2. Inline CSS</h2>
            <p>Probably the most common and quickest out of all 3 is inline CSS. However it has many disadvantages and it is generally discouraged to use unless it is a very small application.
                Basically, we create an object that contains different references which are then called using the style{ } attribute.</p>
            <h2>3. Styled Components</h2>
            <p>Probably the most powerful and useful in my opinion is Styled Components. Styled Components lets you write actual CSS in your JavaScript. The main advantage is that you can add conditional code and use variables and functions within the CSS!.
                You can install Styled Components using the following command:
                npm install --save styled-components
                Next, you need to import it in you component. Then you can create a new variable that will contain the CSS. The same variable name with open and close brackets will render or create an HTML element with the previously added styles on it.</p>
            <div class="card">
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
                                        <a href="view" className="btn btn-primary me-2">View</a>
                                        <Link to={"/admin/edit-news/" + news_list$.id} className="btn btn-warning me-2">Edit</Link>
                                        <a href="delete" className="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Body;