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

    // Run Part 4: State Manager
    const userState = createStateManager({ name: "John", online: false });
    userState.subscribe(state => console.log("State changed:", state));
    userState.setState({ online: true });
    userState.setState({ lastActive: "2023-05-01" });