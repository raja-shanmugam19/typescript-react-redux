import { expect } from 'chai';

import { fetchUsers, fetchUserPosts } from '../components/services/UserService';

describe('API', () => {
    describe('fetchUsers()', () => {
        it('should return an array of users', async () => {
            const users = await fetchUsers();
            expect(users).to.be.an('array');
            expect(users[0].name).to.equal('Leanne Graham');
        });
    });

    describe('fetchUserPosts(userId)', () => {
        it('should return an array of posts for the specified user', async () => {
            const userId = 1;
            const posts = await fetchUserPosts(userId);
            expect(posts).to.be.an('array');
            expect(posts[0]).to.have.property('userId', userId);
        });
    });
});