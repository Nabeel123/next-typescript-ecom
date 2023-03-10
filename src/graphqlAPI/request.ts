import { GraphQLClient } from 'graphql-request'
const endpoint = `https://graphql.datocms.com/`

type Variables = {
  [key: string]: unknown
}

const request = <T>({
  query,
  variables,
}: {
  query: string
  variables?: Variables
}): Promise<T> => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${
        process.env.NEXT_DATOCMS_API_TOKEN ||
        process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN
      }`,
    },
  })

  return client.request(query, variables)
}

export default request
