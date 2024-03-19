function parseUser(user) {
  return {
    id: user.id,
    username: user.username,
  };
}

export async function getUserDetails(token) {
  const url = "http://localhost:8000/auth/me";

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return parseUser(data);
  } catch (error) {
    throw new Error("Error datos del usuario");
  }
}
