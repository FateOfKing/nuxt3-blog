import * as Types from '../generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTypesQuery = (
  { __typename?: 'Query' }
  & { type: Array<(
    { __typename?: 'TypeDto' }
    & Pick<Types.TypeDto, 'id' | 'typeName' | 'orderNum' | 'icon'>
  )> }
);


export const GetTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeName"}},{"kind":"Field","name":{"kind":"Name","value":"orderNum"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]} as unknown as DocumentNode<GetTypesQuery, GetTypesQueryVariables>;