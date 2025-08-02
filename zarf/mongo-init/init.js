// MongoDB initialization script for tennis backend
db = db.getSiblingDB("tennis_db");

// Create collections
db.createCollection("players");
db.createCollection("matches");
db.createCollection("tournaments");
db.createCollection("users");

// Create indexes for better performance
db.players.createIndex({ email: 1 }, { unique: true });
db.players.createIndex({ username: 1 }, { unique: true });
db.matches.createIndex({ date: 1 });
db.matches.createIndex({ player1_id: 1 });
db.matches.createIndex({ player2_id: 1 });
db.tournaments.createIndex({ start_date: 1 });
db.users.createIndex({ email: 1 }, { unique: true });

print("Tennis database initialized successfully");
