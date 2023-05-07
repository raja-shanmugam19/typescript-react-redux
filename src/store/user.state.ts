import  { User } from '../components/models/User';
import  { Post } from '../components/models/Post';

export interface State {
    loading: boolean;
    error: Error | null;
    users: User[];
    filteredUsers: User[];
    posts: Post[],
    username: string
  }
export const initialState: State = {
    loading: true,
    error: null,
    users: [],
    filteredUsers: [],
    posts: [],
    username: ''
};