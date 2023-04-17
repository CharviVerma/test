const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const port = 3000;

mongoose.connect('<mongo_db_url>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const typeDefs = gql`
  type ResponseTime {
    id: ID!
    url: String!
    responseTime: Int!
    timestamp: String!
  }

  type Query {
    responseTimes: [ResponseTime]
  }
`;

const resolvers = {
  Query: {
    responseTimes: async () => {
      const ResponseTime = mongoose.model('ResponseTime');
      return await ResponseTime.find();
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });
