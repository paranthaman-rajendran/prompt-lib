# MDB to Kafka Refactoring

## Gradle Build Tool Examples

### Example 1: Basic Configuration
```groovy
plugins {
    id 'java'
}

group 'com.example'
version '1.0-SNAPSHOT'

task hello {
    doLast {
        println 'Hello, World!'
    }
}
```

### Example 2: Dependencies
```groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.7.0'
}
```

### Example 3: Running the Application
```bash
gradle run
```

### Example 4: Building the JAR
```bash
gradle build
```
