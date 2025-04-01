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

    // Sample users array
const users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", isActive: true },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", isActive: false },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", isActive: true },
    { id: 4, firstName: "Sara", lastName: "Williams", email: "sara@example.com", isActive: true },
  ];
  
  // Run Part 1: Data Transformation
  console.log("Processed Users:", processUserData(users));