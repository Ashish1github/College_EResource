// src/utils/auth.js
export function setAuth(data) {
  // data: { token, user }
  localStorage.setItem("token", data.token);
  localStorage.setItem("userType", data.user.role);
  localStorage.setItem("user", JSON.stringify(data.user));
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("userType");
  localStorage.removeItem("user");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getUserType() {
  return localStorage.getItem("userType");
}

export function getUser() {
  const u = localStorage.getItem("user");
  return u ? JSON.parse(u) : null;
}

export function authHeader() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}
