import { useQuery } from 'react-query';
import { GraphQLClient, request, RequestDocument } from 'graphql-request';

export const useGQLQuery = (key: string, query: RequestDocument) => {
  const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
  const fetchData = async () => await request(endpoint, query)

  return useQuery(key, fetchData)
}
