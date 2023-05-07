
import { fetchUserPosts, fetchUsers } from "../components/services/UserService";

describe('fetchUsers', () => {
  it('returns an array of users', async () => {
    const users = await fetchUsers();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
    expect(users[0]).toHaveProperty('city');
    expect(users[0]).toHaveProperty('company');
    expect(users[0].company).toHaveProperty('name');
  });
});

describe('fetchUserPosts', () => {
  it('returns an array of posts for a given user ID', async () => {
    const userId = 1;
    const posts = await fetchUserPosts(userId);
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty('id');
    expect(posts[0]).toHaveProperty('userId', userId);
    expect(posts[0]).toHaveProperty('title');
    expect(posts[0]).toHaveProperty('body');
  });
});


