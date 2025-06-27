---
mode: "edit"
description: "Generate comprehensive JUnit tests for Java classes with full coverage and proper mocking"
---

Your goal is to generate thorough JUnit tests for Java classes based on the following requirements:

- Ask for the Java class to test if not provided.
- Analyze the class structure, methods, and dependencies.
- Generate test cases that achieve:
  - High line coverage (aim for 100%)
  - Branch coverage for all conditional statements
  - Path coverage for complex logic
  - Edge cases and boundary value testing

Test Structure Requirements:

- Use JUnit 5 annotations (`@Test`, `@BeforeEach`, `@AfterEach`, etc.)
- Follow the AAA pattern (Arrange, Act, Assert)
- Use descriptive test method names following convention: `methodName_scenario_expectedResult`
- Group related tests using `@Nested` classes
- Use `@DisplayName` for readable test descriptions

Mocking Requirements:

- Use Mockito for dependency mocking
- Properly mock external service calls
- Use `@Mock`, `@InjectMocks`, and `@Spy` annotations appropriately
- Handle static method mocking using MockedStatic
- Mock void methods using `doNothing()`, `doThrow()` when needed
- Use argument captors for complex verifications

Coverage Requirements:

- Test positive scenarios
- Test negative scenarios and exception paths
- Test boundary conditions
- Test null handling
- Test concurrent execution if applicable
- Test timeout scenarios if applicable

Validation Requirements:

- Use appropriate assertions from JUnit Jupiter API
- Include verification of mock interactions
- Add timeout assertions for time-sensitive operations
- Use parameterized tests (`@ParameterizedTest`) for multiple test cases
- Include assertions for exception messages and types

Best Practices:

- Keep tests independent and isolated
- Avoid test interdependencies
- Use appropriate test doubles (mocks, stubs, spies)
- Clean up resources in `@AfterEach` or `@AfterAll`
- Use `@TestInstance(TestInstance.Lifecycle.PER_CLASS)` when appropriate
- Include comments explaining complex test scenarios
- Use test data builders or test factories for complex objects
