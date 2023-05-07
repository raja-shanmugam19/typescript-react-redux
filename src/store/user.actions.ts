import  { User } from '../components/models/User';
import { Post } from '../components/models/Post';
  
export type Action =
    | { type: 'FETCH_USERS'; payload: User[] }
    | { type: 'FILTER_USERS'; payload: User[] }
    | { type: 'FETCH_USERS_POST'; payload: Post[]; name: string }
    | { type: 'SET_ERROR'; payload: Error };