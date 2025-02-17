# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:21-jdk-jammy as build

# Set the working directory inside the container
WORKDIR /app

# Copy the build files to the container
COPY build.gradle ./
COPY settings.gradle ./
COPY gradle/ ./gradle
COPY src ./src
COPY gradlew gradlew.bat ./

# Download dependencies and build the project
RUN ./gradlew build -x test

# Use a smaller base image for the final stage
FROM eclipse-temurin:21-jre-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/build/libs/app-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]