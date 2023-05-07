import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../store/user.context';
import styled from 'styled-components';
import { FILTER_USERS, USERS_API_URL, FETCH_USERS_POST, FETCH_USERS } from './commons/constants';
import { PostComponent } from './PostComponent';
import { fetchUserPosts } from './services/UserService';

const StyledForm = styled.form`
  .input-group {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }

  .form-control {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }

  .input-group-btn {
    display: flex;
    align-items: center;
  }

  .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #0062cc;
  }
`;

const Container = styled.div`
  .section-body {
    padding: 30px;
    background-color: #f8f8f8;
  }

  .card {
    border-radius: 8px;
    margin-bottom: 30px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #dee2e6;
    border-radius: 8px 8px 0 0;
    padding: 20px;
  }

  .card-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }

  .card-options form {
    display: flex;
    align-items: center;
  }

  .input-group {
    margin-right: 10px;
  }

  .table-responsive {
    overflow-x: auto;
  }

  .table {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
  }

  .table th,
  .table td {
    vertical-align: middle;
    border-top: none;
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }

  .table th {
    background-color: #f8f8f8;
    text-align: left;
  }

  .table td {
    border-bottom: 1px solid #dee2e6;
  }

  .table tr:last-child td {
    border-bottom: none;
  }

  .custom-control-label::before,
  .custom-control-label::after {
    top: 0.25rem;
  }
`;

export const UserComponent = () => {
    const { state, dispatch } = useContext(UserContext);
    const { users, error, filteredUsers, posts } = state;
    const [searchUser, setSearchUser] = useState('');

    const seachUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchUser(value);
        const filteredUsers = users.filter((user) => user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        dispatch({ type: FILTER_USERS, payload: filteredUsers });
    }

    const onUserClick = async (userId: number, name: string) => {
        console.log('userid', userId);
        const postResponse = await fetchUserPosts(userId);
        dispatch({ type: FETCH_USERS_POST, payload: postResponse, name: name });
    }

    useEffect(() => {
        dispatch({ type: FILTER_USERS, payload: state.users });
    }, [state.users, dispatch]);

    return (
        <Container>
            <div className='container-fluid'>
            { posts && !posts.length && (
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="Employee-list" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">User List</h3>
                                        <div className="card-options">
                                            <StyledForm>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        value={searchUser}
                                                        onChange={seachUserInput}
                                                        className="form-control form-control-sm"
                                                        placeholder="Search Users..."
                                                        name="s"
                                                    />
                                                </div>
                                            </StyledForm>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>EMAIL</th>
                                                        <th>CITY</th>
                                                        <th>COMPANY</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredUsers && filteredUsers.map((item, index) => (
                                                        <tr key={index} onClick={() =>onUserClick(index, item.name)}>
                                                            <td className="d-flex">
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">{item.id}</h6>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>{item.name}</span>
                                                            </td>
                                                            <td>
                                                                <span>{item.email}</span>
                                                            </td>
                                                            <td>{item.address.city}</td>
                                                            <td>{item.company.name}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                { posts && posts.length && (
                 <PostComponent></PostComponent>
                  )}
            </div>
        </Container>
    )
}

