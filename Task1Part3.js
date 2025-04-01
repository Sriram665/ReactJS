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

    // Sample users array
const users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", isActive: true },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", isActive: false },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", isActive: true },
    { id: 4, firstName: "Sara", lastName: "Williams", email: "sara@example.com", isActive: true },
  ];

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