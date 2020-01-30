/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import ApolloClient from "apollo-boost";

/* Client */
const client = new ApolloClient({
  uri: process.env.NODE_ENV === "development" ? ("http://192.168.1.69/api/graphql") : ("https://api.davidshefcik.com/graphql")
});

/* Export */
export default client;