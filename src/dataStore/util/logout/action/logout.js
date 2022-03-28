export const LOGOUT = "LOGOUT";

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userType");
  window.location.reload();
  return {
    type: LOGOUT,
  };
};
