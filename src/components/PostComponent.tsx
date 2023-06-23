import { useContext } from 'react';
import  UserContext  from '../store/user.context';

export const PostComponent = () => {

const { state } =  useContext(UserContext);
const { posts, username } = state;

return (
    <div className='container-fluid'>
    <div className="section-body">
        <div className="container-fluid">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="Employee-list" role="tabpanel">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"> {username} Posts:</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts && posts.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.title}</td>
                                                <td>{item.body}</td>
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
</div>
)
}