---
mode: "edit"
description: "Generate comprehensive API test cases covering all functional scenarios, including positive, negative, and edge cases"
---

Your goal is to generate thorough API test cases for a given API based on the following requirements:

- Ask for the API specification or details if not provided.
- Analyze the API endpoints, request/response structure, parameters, authentication, and business rules.
- Generate test cases that achieve:
  - Full coverage of all functional scenarios described in the API documentation
  - Positive test cases (valid requests, expected flows)
  - Negative test cases (invalid requests, error handling, failure paths)
  - Edge and boundary value test cases (limits, empty, null, max/min values)
  - Alternate and exceptional flows

Test Case Structure Requirements:

- Use a clear and consistent format for each test case, including:
  - Test Case ID
  - Title/Description
  - Endpoint and HTTP Method
  - Preconditions (if any)
  - Request Data (headers, parameters, body)
  - Test Steps (detailed, step-by-step)
  - Expected Response (status code, body, headers)
  - Actual Response (to be filled during execution)
  - Status (Pass/Fail, to be filled during execution)
- Group related test cases by endpoint or scenario
- Use descriptive and meaningful test case titles
- Reference API documentation or requirements where applicable

Coverage Requirements:

- Cover all endpoints, methods, and parameters
- Include both typical and atypical user behaviors
- Test all authentication and authorization scenarios
- Include integration points and system interactions
- Cover error codes, validation, and rate limiting as relevant

Validation Requirements:

- Clearly specify expected outcomes for each request
- Include validation of response status codes, body content, headers, and error messages
- Specify database updates, side effects, or external system calls as needed

Best Practices:

- Keep test cases independent and self-contained
- Avoid duplication; use reusable steps or data where possible
- Use parameterized or data-driven approaches for similar scenarios
- Include comments or notes for complex or non-obvious scenarios
- Ensure test cases are clear, concise, and actionable for testers
