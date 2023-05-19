# Our Team API Documentation

The Our Team API allows you to manage and retrieve information about team members.

Base URL: `http://localhost:8000/ourteam`

## Endpoints

### Retrieve All Team Members

- Method: GET
- URL: `/`
- Description: Retrieves information about all team members.
- Example: `http://localhost:8000/ourteam/`

Response:
```json
[
  {
    "_id": "60aeb7e8fde6ff4a6822a102",
    "name": "John Doe",
    "position": "core",
    "photo": "https://example.com/photo1.jpg",
    "linkedin": "https://linkedin.com/johndoe",
    "instagram": "https://instagram.com/johndoe",
    "email": "johndoe@example.com",
    "tenure": "2022-2023",
    "domain": "development"
  },
  {
    "_id": "60aeb7e8fde6ff4a6822a103",
    "name": "Jane Smith",
    "position": "gdsclead",
    "photo": "https://example.com/photo2.jpg",
    "linkedin": "https://linkedin.com/janesmith",
    "instagram": "https://instagram.com/janesmith",
    "email": "janesmith@example.com",
    "tenure": "2023-2024",
    "domain": "creative"
  },
  ...
]
```

### Retrieve GDSC Leads

- Method: GET
- URL: `/gdsclead`
- Description: Retrieves information about GDSC leads.
- Example: `http://localhost:8000/ourteam/gdsclead`

Response:
```json
[
  {
    "_id": "60aeb7e8fde6ff4a6822a103",
    "name": "Jane Smith",
    "position": "gdsclead",
    "photo": "https://example.com/photo2.jpg",
    "linkedin": "https://linkedin.com/janesmith",
    "instagram": "https://instagram.com/janesmith",
    "email": "janesmith@example.com",
    "tenure": "2023-2024",
    "domain": "creative"
  },
  ...
]
```

### Add a New Team Member

- Method: POST
- URL: `/`
- Description: Adds a new team member.
- Example: `http://localhost:8000/ourteam/`

Request Body:
```json
{
  "name": "John Doe",
  "position": "core",
  "photo": "https://example.com/photo1.jpg",
  "linkedin": "https://linkedin.com/johndoe",
  "instagram": "https://instagram.com/johndoe",
  "email": "johndoe@example.com",
  "tenure": "2022-2023",
  "domain": "development"
}
```

Response:
```json
{
  "_id": "60aeb7e8fde6ff4a6822a102",
  "name": "John Doe",
  "position": "core",
  "photo": "https://example.com/photo1.jpg",
  "linkedin": "https://linkedin.com/johndoe",
  "instagram": "https://instagram.com/johndoe",
  "email": "johndoe@example.com",
  "tenure": "2022-2023",
  "domain": "development"
}
```

### Filter Team Members



- Method: GET
- URL: `/filter`
- Description: Filters team members based on domain and/or tenure.
- Example 1: `http://localhost:8000/ourteam/filter?domain=development&&tenure=2021-2022`
- Example 2: `http://localhost:8000/ourteam/filter?domain=development`
- Example 3: `http://localhost:8000/ourteam/filter?tenure=2021-2022`

Response:
```json
[
  {
    "_id": "60aeb7e8fde6ff4a6822a102",
    "name": "John Doe",
    "position": "core",
    "photo": "https://example.com/photo1.jpg",
    "linkedin": "https://linkedin.com/johndoe",
    "instagram": "https://instagram.com/johndoe",
    "email": "johndoe@example.com",
    "tenure": "2021-2022",
    "domain": "development"
  },
  ...
]
```


# Batch Pic API Documentation

The Batch Pic API allows you to manage and retrieve information about batch photos.

Base URL: `http://localhost:8000/ourteam/batchpic`

## Endpoints

### Retrieve All Batch Photos

- Method: GET
- URL: `/`
- Description: Retrieves information about all batch photos.
- Example: `http://localhost:8000/ourteam/batchpic/`

Response:
```json
[
  {
    "_id": "60aeb7e8fde6ff4a6822a201",
    "batchPhoto": "https://example.com/batchphoto1.jpg",
    "tenure": "2022-2023",
    "domain": "development"
  },
  {
    "_id": "60aeb7e8fde6ff4a6822a202",
    "batchPhoto": "https://example.com/batchphoto2.jpg",
    "tenure": "2023-2024",
    "domain": "creative"
  },
  ...
]
```

### Retrieve Batch Photos by Tenure and/or Domain

- Method: GET
- URL: `/?tenure={tenure}&domain={domain}`
- Description: Retrieves batch photos filtered by tenure and/or domain.
- Example 1: `http://localhost:8000/ourteam/batchpic/?tenure=2021-2022`
- Example 2: `http://localhost:8000/ourteam/batchpic/?domain=gamedev`
- Example 3: `http://localhost:8000/ourteam/batchpic/?tenure=2021-2022&domain=development`

Response:
```json
[
  {
    "_id": "60aeb7e8fde6ff4a6822a201",
    "batchPhoto": "https://example.com/batchphoto1.jpg",
    "tenure": "2021-2022",
    "domain": "development"
  },
  ...
]
```

### Add a New Batch Photo

- Method: POST
- URL: `/`
- Description: Adds a new batch photo.
- Example: `http://localhost:8000/ourteam/batchpic/`

Request Body:
```json
{
  "batchPhoto": "https://example.com/batchphoto3.jpg",
  "tenure": "2022-2023",
  "domain": "management"
}
```

Response:
```json
{
  "_id": "60aeb7e8fde6ff4a6822a203",
  "batchPhoto": "https://example.com/batchphoto3.jpg",
  "tenure": "2022-2023",
  "domain": "management"
}
```
