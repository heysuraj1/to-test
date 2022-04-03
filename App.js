import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./navigation/drawerNavigation";
import { ApolloClient, InMemoryCache , ApolloProvider  } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://test-strapi-suraj.herokuapp.com/graphql',
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MyDrawer />
        
      </NavigationContainer>
      </ApolloProvider>
  );
};

export default App;
