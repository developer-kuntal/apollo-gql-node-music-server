const express = require('express');
const { ApolloServer, } = require('apollo-server-express');
const { 
    // ApolloServerPluginLandingPageProductionDefault,
    // ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageGraphQLPlayground,
    // ApolloServerPluginLandingPageDisabled,
} = require('apollo-server-core');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const mongoose = require('mongoose');

/**
 * Connection with Apollo-Graphql server
 */

async function startServer() {

    const app = express()
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        // ApolloServerPluginLandingPageDisabled()
        ApolloServerPluginLandingPageGraphQLPlayground(
            // options
        )
      ]
    });
  
    await apolloServer.start();
    
    apolloServer.applyMiddleware({ app: app });
  
    app.use((req,res) => {
      res.send("Hello from express apollo server")
    });
  
    await mongoose.connect('mongodb://localhost:27017/musics', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("mongoose connected...")

    app.listen(4400, () => console.log('Server in running on port https://127.0.0.1:4400/graphql'));

}

startServer();