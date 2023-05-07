
import { User } from '../models/User';
import { Post } from '../models/Post';
import { USERS_API_URL } from '../commons/constants';

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`${USERS_API_URL}/users`);
    const data = await response.json();
    return data;
  }
  
  export async function fetchUserPosts(userId: number): Promise<Post[]> {
    const response = await fetch(`${USERS_API_URL}/posts?userId=${userId}`);
    const data = await response.json();
    return data;
  }
  