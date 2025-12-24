# ---------- BUILD ----------
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app

# Copiamos solo pom primero para cachear dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiamos el resto del código
COPY src ./src
RUN mvn clean package -DskipTests

# ---------- RUNTIME ----------
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
