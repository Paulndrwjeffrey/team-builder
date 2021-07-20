const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 666;
  const worker = new Manager("David", 666,"test@test.com", testValue);
  expect(worker.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const worker = new Manager("David", 666,"test@test.com", 6660);
  expect(worker.getRole()).toBe(testValue);
});

test("Can get office number via getofficeNumber()", () => {
  const testValue = 666;
  const worker = new Manager("David", 666,"test@test.com", testValue);
  expect(worker.getofficeNumber()).toBe(testValue);
});