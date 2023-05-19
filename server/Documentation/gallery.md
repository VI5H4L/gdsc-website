# Gallery API Documentation

The Gallery API allows you to manage and retrieve photos in the gallery.

Base URL: `http://localhost:8000/gallery`

## Endpoints

### Retrieve All Photos

- Method: GET
- URL: `/`
- Description: Retrieves all photos in the gallery.
- Example: `http://localhost:8000/gallery/`

Response:
```json
[
  {
    "_id": "60aeb7e8fde6ff4a6822a102",
    "photo": "https://example.com/photo1.jpg"
  },
  {
    "_id": "60aeb7e8fde6ff4a6822a103",
    "photo": "https://example.com/photo2.jpg"
  },
  ...
]
```

### Add a New Photo

- Method: POST
- URL: `/`
- Description: Adds a new photo to the gallery.
- Example: `http://localhost:8000/gallery/`

Request Body:
```json
{
  "photo": "https://example.com/newphoto.jpg"
}
```

Response:
```json
{
  "_id": "60aeb7e8fde6ff4a6822a104",
  "photo": "https://example.com/newphoto.jpg"
}
```
