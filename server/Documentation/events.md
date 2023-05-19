# Event API Documentation

This API provides endpoints to manage events.

## Base URL

The base URL for all endpoints is `http://localhost:8000/events/`.

## Endpoints

### Get All Events

- **URL**: `/all`
- **Method**: `GET`
- **Description**: Retrieves all events.
- **Example**: `http://localhost:8000/events/all`

### Create an Event

- **URL**: `/`
- **Method**: `POST`
- **Description**: Creates a new event.
- **Request Body**:
  - `name` (required): The name of the event (string).
  - `description` (required): The description of the event (string).
  - `timeline` (required): The timeline details of the event (object).
  - `photo`: The URL of the event photo (string).
  - `buttonlink`: The GDSC Community link (RSVP) (string).
  - `tenure` (required): The tenure of the event (string, one of: "2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026").
  - `domains` (required): An array of event domains (strings, one or more of: "development", "creative", "management", "gamedev", "cp", "aiml").
  - `speakers`: An array of event speakers (strings).
  - `facilitators`: An array of event facilitators (strings).
- **Example**:
  - Request Body:
    ```json
    {
      "name": "Workshop on Web Development",
      "description": "Learn the basics of web development",
      "timeline": {
        "day": "Monday",
        "startDate": "2023-06-01",
        "startTime": "10:00 AM",
        "endDate": "2023-06-01",
        "endTime": "12:00 PM",
        "venue": "Zoom"
      },
      "photo": "https://example.com/workshop.jpg",
      "buttonlink": "https://example.com/rsvp",
      "tenure": "2023-2024",
      "domains": ["development"],
      "speakers": ["John Doe", "Jane Smith"],
      "facilitators": ["Mark Johnson"]
    }
    ```
  - Response Body:
    ```json
    {
      "_id": "611deab2c2a18e001f123456",
      "name": "Workshop on Web Development",
      "description": "Learn the basics of web development",
      "timeline": {
        "day": "Monday",
        "startDate": "2023-06-01",
        "startTime": "10:00 AM",
        "endDate": "2023-06-01",
        "endTime": "12:00 PM",
        "venue": "Zoom"
      },
      "photo": "https://example.com/workshop.jpg",
      "buttonlink": "https://example.com/rsvp",
      "tenure": "2023-2024",
      "domains": ["development"],
      "speakers": ["John Doe", "Jane Smith"],
      "facilitators": ["Mark Johnson"]
    }
    ```

### Filter Events

- **URL**: `/filter`
- **Method**: `GET`
- **Description**: Filters events based on specified criteria.
- **Query Parameters**:
  - `domains`: Comma-separated list of event domains to filter by (optional

).
  - `tenure`: The tenure of the event to filter by (optional).
- **Example**:
  - Filter events by domains and tenure:
    - `http://localhost:8000/events/filter?domains=development,creative&tenure=2021-2022`
  - Filter events by domains only:
    - `http://localhost:8000/events/filter?domains=development`
  - Filter events by tenure only:
    - `http://localhost:8000/events/filter?tenure=2021-2022`
- **Response Body**:
  - An array of filtered events.

### Get Latest Events

- **URL**: `/latest`
- **Method**: `GET`
- **Description**: Retrieves the latest events.
- **Example**: `http://localhost:8000/events/latest`
- **Response Body**:
  - An array of the latest events sorted by startDate in descending order.
