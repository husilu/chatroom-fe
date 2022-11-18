export function isAuth(): boolean {
    const jwt = localStorage.getItem("token")
    if (jwt) return JSON.parse(jwt)
    return false
  }