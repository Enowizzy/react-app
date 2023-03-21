const AddNews = () => {
    return (
        <div class="container col-md-8 mt-3">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">All News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">News Form</h5>
                    <form class="text-center">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name"></input>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name"></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <a href="#" class="btn btn-primary">Add News</a>
                </div>
            </div>
        </div>
    );
}

export default AddNews;