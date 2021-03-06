define({ "api": [
  {
    "type": "get",
    "url": "/api/states",
    "title": "Request All States",
    "name": "GetStates",
    "group": "StatesAPI",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  \"/api/state/AK\",\n  \"/api/state/AL\",\n  \"/api/state/AR\",\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 Bad request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequest:",
          "content": "HTTP/1.1 400 Not Found\n{\n  'error': 'UserNotFound'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/states",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "StatesAPI"
  }
] });
