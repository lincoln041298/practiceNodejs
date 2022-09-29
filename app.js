require("dotenv").config();
const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const mongoose = require("mongoose");
const app = express();

const typeDefs = require("./schema/schema");

const resolvers = require("./resolver/resolver");

const mongoDataMethods = require("./data/db");

const conncetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

conncetDB();

let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
  res.json({ data: "api working" });
});

app.listen(4000, function () {
  console.log(`server running on port 4000`);
  console.log(`gql path is http://localhost:4000${server.graphqlPath}`);
});
