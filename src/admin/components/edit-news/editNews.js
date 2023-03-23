
const EditNews = () => {
    return (
        <div class="container col-md-8 mt-5">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Edit News</a>
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
                    <form class="text-center">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Author first name"></input>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Author last name"></input>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div className="col">
                                <input type="text" disabled="true" class="form-control" placeholder="Id"></input>
                            </div>
                            <div class="col form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rowsF="3" placeholder="News area"></textarea>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary float-end">Update News</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default EditNews;