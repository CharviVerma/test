import axios from 'axios';

export async function getUser() {
  const token = localStorage.getItem('token');
  const userId = JSON.parse(atob(token.split('.')[1])).id; // Decode user ID from JWT token
  const response = await axios.get(`/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
