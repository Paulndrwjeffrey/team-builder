const Employee = require("../lib/Employee");

test("create an employee", () => {
  const David = new Employee();
  expect(typeof(David)).toBe("object");
});

test("set name", () => {
  const name = "David";
  const worker = new Employee(name);
  expect(worker.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const number = 666;
  const worker = new Employee("Satan", number);
  expect(worker.id).toBe(number);
});

test("Can set email", () => {
  const testEmail = "test@test.com";
  const worker = new Employee("David", 666, testEmail);
  expect(worker.email).toBe(testEmail);
});

test("Can get name via getName()", () => {
  const testValue = "David";
  const worker = new Employee(testValue);
  expect(worker.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 666;
  const worker = new Employee("David", testValue);
  expect(worker.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const worker = new Employee("David", 666, testValue);
  expect(worker.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const worker = new Employee("David", 666, "test@test.com");
  expect(worker.getRole()).toBe(testValue);
});