const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
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