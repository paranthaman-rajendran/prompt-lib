# GitHub Copilot Custom Instruction: Spring Boot Conversion (Agent Mode)

## Project Goal

When working with a legacy Java project, assist in converting it into a modern Spring Boot application using Gradle, operating in agent mode.

## Agent Mode Instructions

### Gradle Configuration

- **settings.gradle**:

  - Add the latest Spring Boot Gradle plugin to the `pluginManagement` block.

- **build.gradle**:
  - Apply the Spring Boot Gradle plugin.
  - Set Java compatibility version to 17.
  - Add dependencies:
    - `spring-boot-starter-web`
    - `spring-boot-starter-test`
  - Ensure the main application class is configured for the Spring Boot plugin.

### Java Code Generation

- When prompted, generate a new Spring Boot main class annotated with `@SpringBootApplication`.
- Include a basic `@RestController` to demonstrate the application is runnable.

### Agent Mode Behavior

- Respond to user prompts with step-by-step guidance or code snippets for each migration step.
- Adapt responses based on the current project structure and user queries.
- Ensure all generated code and configuration are compatible with Spring Boot best practices.
