interface IPerson {
  getFirstName(): string;
  getLastName(): string;
  getFullName(): string;
}

// interface sets a "standard," if you will, to require another class to use
// these are implemented, to ensure you have the right getters/setters written
// for the classes which you implement these.
