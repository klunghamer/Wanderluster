# Wanderluster

###Entity Relationship Diagram - User and Place Schemas

User Schema:
-firstName: String
-lastName: String
-email: String
-password: String
-createdAt: Date
-updatedAt: Date
-placesToVist: [Place Schema]
-placesVisited: [Place Schema]

Place Schema:
-city: String
-country: String
-weatherDesc: String
-temp: Number
-humidity: Number
-icon: png file

