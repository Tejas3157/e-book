const books = [
  { id: 1, title: "Learn React", author: "John Doe", category: "Education", rating: 4.5, free: true },
  { id: 2, title: "Business 101", author: "Jane Smith", category: "Business", rating: 4.0, free: false },
  { id: 3, title: "Financial Freedom", author: "Rich Guy", category: "Financial", rating: 5, free: false },
  { id: 4, title: "Top Rated Book", author: "Star Author", category: "Education", rating: 5, free: true },
  // Add more books as needed
];

export const fetchBooks = (category = null, freeOnly = false) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = books;
      if (category) filtered = filtered.filter(b => b.category === category);
      if (freeOnly) filtered = filtered.filter(b => b.free === true);
      resolve(filtered);
    }, 500);
  });
};

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({ token: "mock-token", user: { email } });
      } else {
        reject("Invalid credentials");
      }
    }, 500);
  });
};

export const signup = ({ email, password }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "mock-token", user: { email } });
    }, 500);
  });
};