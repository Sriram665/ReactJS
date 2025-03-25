// userProfile.js
// Part 1: Data Transformation
function processUserData(users) {
    return users
      .filter(user => user.isActive)
      .map(user => ({
        id: user.id,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email
      }))
      .sort((a, b) => a.fullName.localeCompare(b.fullName));
  }
  
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
  
  // Part 3: Creating a User Component (Simulated)
  function createUserProfileHTML(user) {
    return `
      <div class="user-card" id="user-${user.id}">
        <img src="${user.avatar}" alt="${user.firstName} ${user.lastName}" class="avatar" />
        <div class="user-info">
          <h2>${user.firstName} ${user.lastName}</h2>
          <p>Email: ${user.email}</p>
          <p>Role: ${user.role}</p>
          ${user.isActive ? '<span class="badge active">Active</span>' : ''}
        </div>
      </div>
    `;
  }
  
  // Part 4: State Management Helper
  function createStateManager(initialState) {
    let state = { ...initialState };
    const listeners = new Set();
  
    return {
      getState: () => ({ ...state }),
      setState: (newState) => {
        state = { ...state, ...newState };
        listeners.forEach(callback => callback(state));
      },
      subscribe: (callback) => {
        listeners.add(callback);
        return () => listeners.delete(callback);
      }
    };
  }
  // Sample users array
const users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", isActive: true },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", isActive: false },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", isActive: true },
    { id: 4, firstName: "Sara", lastName: "Williams", email: "sara@example.com", isActive: true },
  ];
  
  // Run Part 1: Data Transformation
  console.log("Processed Users:", processUserData(users));
  
  // Run Part 2: Fetch Posts
  fetchUserPosts(1).then(posts => console.log("User Posts:", posts));
  
  // Run Part 3: Create User Profile HTML
  const sampleUser = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: true,
    role: "Admin",
  };
  console.log("User Profile HTML:\n", createUserProfileHTML(sampleUser));
  
  // Run Part 4: State Manager
  const userState = createStateManager({ name: "John", online: false });
  userState.subscribe(state => console.log("State changed:", state));
  userState.setState({ online: true });
  userState.setState({ lastActive: "2023-05-01" });
  
  