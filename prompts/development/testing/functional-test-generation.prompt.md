---
mode: "edit"
description: "Generate comprehensive functional test cases for features, covering all scenarios including positive, negative, and edge cases"
---

Your goal is to generate thorough functional test cases for a given feature based on the following requirements:

- Ask for the feature details or user story if not provided.
- Analyze the feature requirements, acceptance criteria, and business rules.
- Generate test cases that achieve:
  - Full coverage of all functional scenarios described in the feature
  - Positive test cases (valid inputs, expected flows)
  - Negative test cases (invalid inputs, error handling, failure paths)
  - Edge and boundary value test cases (limits, empty, null, max/min values)
  - Alternate and exceptional flows

Test Case Structure Requirements:

- Use a clear and consistent format for each test case, including:
  - Test Case ID
  - Title/Description
  - Preconditions (if any)
  - Test Steps (detailed, step-by-step)
  - Test Data (inputs/parameters)
  - Expected Result
  - Actual Result (to be filled during execution)
  - Status (Pass/Fail, to be filled during execution)
- Group related test cases by functional area or scenario
- Use descriptive and meaningful test case titles
- Reference acceptance criteria or requirements where applicable

Coverage Requirements:

- Cover all acceptance criteria and business rules
- Include both typical and atypical user behaviors
- Test all user roles and permissions if applicable
- Include integration points and system interactions
- Cover UI, API, and backend scenarios as relevant

Validation Requirements:

- Clearly specify expected outcomes for each step
- Include validation of error messages, status codes, and data changes
- Specify UI changes, database updates, or external system calls as needed

Best Practices:

- Keep test cases independent and self-contained
- Avoid duplication; use reusable steps or data where possible
- Use parameterized or data-driven approaches for similar scenarios
- Include comments or notes for complex or non-obvious scenarios
- Ensure test cases are clear, concise, and actionable for testers

