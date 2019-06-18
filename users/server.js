const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

// set a expressGraphQL middleware to listen on GraphQL Request
app.use('/graphql', expressGraphQL({
    // this is a dev tool that allows us to make query against dev server
    graphiql: true
}))

app.listen(4000, () => {
    console.log('server running on port 4000');
});
