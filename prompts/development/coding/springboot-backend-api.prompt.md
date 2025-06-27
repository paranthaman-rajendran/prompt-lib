---
mode: "agent"
tools: ["githubRepo", "codebase"]
description: "Generate a new Spring Boot backend API with controller, service, and data access layer for Oracle database"
---

Your goal is to generate a new Spring Boot backend API based on the following requirements:

- Ask for the entity name, fields, and required endpoints if not provided.
- Generate a REST controller class for the API.
- Generate a service class for business logic.
- Generate a repository/data access layer using Spring Data JPA for Oracle database.
- Use standard Spring Boot project structure and best practices.
- Use Java and annotate classes appropriately (`@RestController`, `@Service`, `@Repository`, `@Entity`, etc.).
- Configure Oracle database connection using `application.properties`.
- Generate example CRUD endpoints (Create, Read, Update, Delete).
- Use DTOs and mapping where appropriate.
- Ensure proper exception handling and validation.
- Include sample unit tests for service and controller layers.
