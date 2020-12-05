import { goto } from '@sapper/app';

export const authData = {
  getToken() {
    return localStorage.getItem('JWT') || null;
  },

  clearToken() {
    return localStorage.removeItem('JWT');
  },

  getUserId() {
    let user = localStorage.getItem('user');
    if (!user) return null;
    user = JSON.parse(user);
    return user.id;
  },

  getUser() {
    let user = localStorage.getItem('user');
    if (!user) return null;
    user = JSON.parse(user);
    return user;
  },
};

export const auth = (data) => {
  const { jwt, user } = data.data;
  localStorage.setItem('jwt', jwt);
  localStorage.setItem('user', JSON.stringify(user));
  const backurl = localStorage.getItem('backUrl');
  localStorage.removeItem('backUrl');
  if (backurl) goto(backurl);
  else goto('/console');
};

export const authError = (e) => {
  const responseTrue = () => {
    const msg = e.response.data.message[0];
    console.error('Terjadi Kesalahan', `${e}\n`, msg);
    return msg.messages[0].message;
  };

  const responseNull = () => {
    console.error('Terjadi Kesalahan', `${e}\n`);
    return `Terjadi Kesalahan ${e.message}`;
  };

  return (e.response) ? responseTrue() : responseNull();
};

export const logout = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('user');
};
