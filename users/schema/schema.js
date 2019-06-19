const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema   // take a root query and returns a graphQL schema instance
} = graphql;

// User schema
const UserType = new GraphQLObjectType({
  // required properties
  name: 'User', // type name
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

// root query - jump and land on a specific node of the graph
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }}, // if given a user id, it should returns a UserType user.
      // goes to the data graph and find the one we are looking for. e.g. a UserType user with id 23.
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(response => response.data);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})