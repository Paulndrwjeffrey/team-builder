const Engineer = require("../lib/Engineer");

test("Can set GITHUB via constructor", () => {
  const testValue = "dogmanstar";
  const worker = new Engineer("David", 666, "test@test.com", testValue);
  expect(worker.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const worker = new Engineer("David", 666, "test@test.com", "GitHubUser");
  expect(worker.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "dogmanstar";
  const worker = new Engineer("David", 666, "test@test.com", testValue);
  expect(worker.getGithub()).toBe(testValue);
});