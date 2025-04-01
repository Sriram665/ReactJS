  // Part 2: Async Data Fetching
  async function fetchUserPosts(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) throw new Error("Failed to fetch user posts");
      const posts = await response.json();
      return posts.map(post => post.title);
    } catch (error) {
      console.error("Error fetching user posts:", error);
      return [];
    }
  }

    // Sample users array
const users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", isActive: true },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", isActive: false },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", isActive: true },
    { id: 4, firstName: "Sara", lastName: "Williams", email: "sara@example.com", isActive: true },
  ];

    // Run Part 2: Fetch Posts
    fetchUserPosts(1).then(posts => console.log("User Posts:", posts));