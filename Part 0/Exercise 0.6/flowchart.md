```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
    note right of Browser: {content: "we don't need 2 refresh!", date: 2025-08-11T03:40:47.506Z}
    activate Server
    Server-->>Browser: 201 CREATED ^^
    note left of Server: {message: "note created"}
    deactivate Server
```