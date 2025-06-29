---
mode: "agent"
tools: ["githubRepo", "codebase"]
description: "Generate a new Spring Boot backend API with controller, service, and data access layer."
---

Your goal is to generate a complete Spring Boot backend API based on the parameters provided. If any parameters are missing, please ask for them.

**Parameters:**

- **Entity Name (`{{entityName}}`)**: The name for the core domain model. Example: `Product`.
- **Entity Fields (`{{entityFields}}`)**: The fields for the entity, including types. Example: `id (Long, primary key), name (String), description (String), price (BigDecimal)`.
- **Database Type (`{{databaseType}}`)**: The target database. Example: `Oracle`, `PostgreSQL`, `H2`.
- **Base Package Name (`{{packageName}}`)**: The root package for the Java classes. Example: `com.example.ecommerce`.

**Generation Steps:**

**1. Project Structure:**
Create a standard Maven/Gradle project structure for a Spring Boot application under the package `{{packageName}}`.

- `{{packageName}}.controller`
- `{{packageName}}.service`
- `{{packageName}}.repository`
- `{{packageName}}.model` or `{{packageName}}.entity`
- `{{packageName}}.dto`
- `{{packageName}}.exception`

**2. Model/Entity (`{{entityName}}.java`):**
Generate a JPA entity class named `{{entityName}}` in the `model` package.

- Use the fields defined in `{{entityFields}}`.
- Annotate with `@Entity` and `@Table`.
- Include appropriate annotations for primary keys (`@Id`, `@GeneratedValue`) and columns (`@Column`).
- Generate constructors, getters, and setters.

**3. Repository (`{{entityName}}Repository.java`):**
Generate a Spring Data JPA repository interface in the `repository` package.

- It should extend `JpaRepository<{{entityName}}, Long>`. (Assume Long is the ID type unless specified otherwise in `{{entityFields}}`).
- Annotate with `@Repository`.

**4. DTOs (`{{entityName}}Dto.java`):**
Generate a DTO class in the `dto` package to transfer data for the `{{entityName}}`.

- Include fields that mirror the entity, but are suitable for external exposure.
- Consider creating separate DTOs for requests (e.g., `Create{{entityName}}Request`) and responses.
- Implement a mapping mechanism (e.g., using MapStruct or manual mapper methods) to convert between the Entity and DTO.

**5. Service (`{{entityName}}Service.java`):**
Generate a service class in the `service` package for business logic.

- Annotate with `@Service`.
- Inject the `{{entityName}}Repository`.
- Implement CRUD (Create, Read, Update, Delete) methods.
- The service methods should operate on and return DTOs, handling the mapping to/from the JPA entity internally.

**6. Controller (`{{entityName}}Controller.java`):**
Generate a REST controller in the `controller` package.

- Annotate with `@RestController` and `@RequestMapping("/api/v1/{{entityName | pluralize}}")`.
- Inject the `{{entityName}}Service`.
- Generate REST endpoints for standard CRUD operations:
  - `POST /`: Create a new `{{entityName}}`.
  - `GET /`: Get all `{{entityName | pluralize}}`.
  - `GET /{id}`: Get a `{{entityName}}` by its ID.
  - `PUT /{id}`: Update an existing `{{entityName}}`.
  - `DELETE /{id}`: Delete a `{{entityName}}`.
- Endpoints should accept and return DTOs.
- Implement input validation using annotations like `@Valid`, `@NotNull`, etc.

**7. Exception Handling:**
Create a global exception handler using `@ControllerAdvice`.

- Handle common exceptions like `ResourceNotFoundException`, `MethodArgumentNotValidException`, etc.
- Return meaningful JSON error responses.

**8. Configuration (`application.properties`):**
Generate the necessary configuration for the `{{databaseType}}` database connection.

- `spring.datasource.url`
- `spring.datasource.username`
- `spring.datasource.password`
- `spring.datasource.driver-class-name`
- `spring.jpa.database-platform` (e.g., `org.hibernate.dialect.Oracle12cDialect`)
- `spring.jpa.hibernate.ddl-auto=update`

**9. Unit Tests:**
Generate sample unit tests for the service and controller layers using JUnit 5 and Mockito.

- **Service Test**: Mock the repository layer to test the business logic in isolation.
- **Controller Test**: Use `@WebMvcTest` and `MockMvc` to test the controller endpoints without a running server.

---

**Example Usage:**

To use this prompt, you would provide the parameters like this:

`@agent generate a spring boot api with {{entityName}}=User, {{entityFields}}=id (Long), username (String), email (String), {{databaseType}}=PostgreSQL, {{packageName}}=com.example.auth`
