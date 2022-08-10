/* eslint-disable no-undef */
import { User } from "./user.js";

const API_BASE_URL = "http://localhost:4000/api/users";

export interface UsersApiClient {
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    addNewUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUserById(id: number): Promise<User>;
}

class UsersApiClientImpl implements UsersApiClient {
    getAllUsers(): Promise<User[]> {
        return this.handleRequest(API_BASE_URL);
    }
    getUserById(id: number): Promise<User> {
        return this.handleRequest(`${API_BASE_URL}/${id}`);
    }
    addNewUser(user: User): Promise<User> {
        return this.handleRequest(API_BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    async updateUser(user: User): Promise<User> {
        return this.handleRequest(`${API_BASE_URL}/${user.userId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    async deleteUserById(id: number): Promise<User> {
        return this.handleRequest(`${API_BASE_URL}/${id}`, {
            method: 'DELETE'
        });
    }

    private async handleRequest(url: string, options?: RequestInit) {
        try {
            const postsResp = await fetch(url, options);
            if (postsResp.status >= 400) {
                return Promise.reject(postsResp.body);
            }
            return postsResp.json();
        } catch (err) {
            return Promise.reject(err);
        }
    }
    
}

export const UsersAPI: UsersApiClient = new UsersApiClientImpl();