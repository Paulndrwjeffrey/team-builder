const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "School";
  const worker = new Intern("David", 666, "test@test.com", testValue);
  expect(worker.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const worker = new Intern("David", 666, "test@test.com", "School");
  expect(worker.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "School";
  const worker = new Intern("David", 666, "test@test.com", testValue);
  expect(worker.getSchool()).toBe(testValue);
});