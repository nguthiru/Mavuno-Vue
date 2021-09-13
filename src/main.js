import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/style.css'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache:cache,
  connectToDevTools: true,
})

const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient,
  })

const app = createApp(App);
app.use(apolloProvider);

app.use(router);
app.mount('#app');
