/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const UsersList = () => {
    const [users$, user_update$] = useState([]);
    const navigate = useNavigate();

    const deleteUser = (code) => {
        if (window.confirm('Are you sure you want to delete this user')) {
            fetch('http://localhost:8000/news/' + code, {
                method: "DELETE"
            }).then(res => {
                toast.success('User Deleted Successfully');
                navigate(0);
            }).catch((err) => {
                console.log(err.message)
            });
        }
    }

    useEffect(() => {
        fetch('http://localhost:8000/users').then(res => {
            return res.json();
        }).then(resp => {
            user_update$(resp);
        }).catch((err) => {
            console.log(err.message)
        });
    }, [])
    return (
        <div class="container col-md-10 justify-content-center mt-3">
            <h2>Users Page</h2>
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users$.map((user$) => (
                            <tr key={user$.id}>
                                <td>{user$.id}</td>
                                <td>{user$.first_name}</td>
                                <td>{user$.last_name}</td>
                                <td>{user$.phone}</td>
                                <td>{user$.email}</td>
                                <td>{user$.role}</td>
                                <td>
                                    <Link to={"/admin/view-news/" + user$.id} className="btn btn-primary me-2">View</Link>
                                    <Link to={"/admin/edit-news/" + user$.id} className="btn btn-warning me-2">Edit</Link>
                                    <a onClick={() => { deleteUser(user$.id) }} className="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;