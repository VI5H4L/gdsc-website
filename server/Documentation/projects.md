# Project API Documentation

This API provides endpoints to manage projects.

## Base URL

The base URL for all endpoints is `http://localhost:8000/projects/`.

## Endpoints

### Get All Projects

- **URL**: `/all`
- **Method**: `GET`
- **Description**: Retrieves all projects.
- **Example**: `http://localhost:8000/projects/all`

### Create a Project

- **URL**: `/`
- **Method**: `POST`
- **Description**: Creates a new project.
- **Request Body**:
  - `name` (required): The name of the project (string).
  - `description` (required): The description of the project (string).
  - `timeline` (required): The timeline details of the project (object).
  - `photo`: The URL of the project photo (string).
  - `projectLink`: The deployed project link (string).
  - `github`: The project's GitHub link (string).
  - `tenure`: The tenure of the project (string, one of: "2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026").
  - `domains` (required): An array of project domains (strings, one or more of: "development", "creative", "management", "gamedev", "cp", "aiml").
  - `teamMentors`: An array of project team mentors (strings).
  - `teamMembers`: An array of project team members (strings).
- **Example**:
  - Request Body:
    ```json
    {
      "name": "Web Application Development",
      "description": "Building a web application using modern technologies",
      "timeline": {
        "day": "Monday",
        "startDate": "2023-06-01",
        "startTime": "10:00 AM",
        "endDate": "2023-06-30",
        "endTime": "5:00 PM",
        "venue": "Virtual"
      },
      "photo": "https://example.com/project.jpg",
      "projectLink": "https://example.com/webapp",
      "github": "https://github.com/example/webapp",
      "tenure": "2023-2024",
      "domains": ["development"],
      "teamMentors": ["John Doe", "Jane Smith"],
      "teamMembers": ["Alice Johnson", "Bob Anderson"]
    }
    ```
  - Response Body:
    ```json
    {
      "_id": "611deab2c2a18e001f123456",
      "name": "Web Application Development",
      "description": "Building a web application using modern technologies",
      "timeline": {
        "day": "Monday",
        "startDate": "2023-06-01",
        "startTime": "10:00 AM",
        "endDate": "2023-06-30",
        "endTime": "5:00 PM",
        "venue": "Virtual"
      },
      "photo": "https://example.com/project.jpg",
      "projectLink": "https://example.com/webapp",
      "github": "https://github.com/example/webapp",
      "tenure": "2023-2024",
      "domains": ["development"],
      "teamMentors": ["John Doe", "Jane Smith"],
      "teamMembers": ["Alice Johnson", "Bob Anderson"]
    }
    ```

### Filter Projects

- **URL**: `/filter`
- **

Method**: `GET`
- **Description**: Filters projects based on specified criteria.
- **Query Parameters**:
  - `domains`: Comma-separated list of project domains to filter by (optional, e.g., `domains=development,creative`).
  - `tenure`: The tenure of the project to filter by (optional, e.g., `tenure=2021-2022`).
- **Example**:
  - Filter projects by domains and tenure:
    - `http://localhost:8000/projects/filter?domains=development,creative&tenure=2021-2022`
  - Filter projects by domains only:
    - `http://localhost:8000/projects/filter?domains=development`
  - Filter projects by tenure only:
    - `http://localhost:8000/projects/filter?tenure=2021-2022`
- **Response Body**:
  - An array of filtered projects.
