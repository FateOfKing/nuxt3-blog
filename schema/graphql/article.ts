import * as Types from '../generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['Float'];
}>;


export type GetArticleQuery = (
  { __typename?: 'Query' }
  & { getArticle: (
    { __typename?: 'ArticleDto' }
    & Pick<Types.ArticleDto, 'id' | 'title' | 'article_content' | 'addTime' | 'view_content' | 'type_id'>
  ) }
);

export type GetArticlesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = (
  { __typename?: 'Query' }
  & { getArticles: Array<(
    { __typename?: 'ArticleDto' }
    & Pick<Types.ArticleDto, 'id' | 'title' | 'introduce' | 'addTime' | 'view_content' | 'type_id'>
  )>, getArticlesWithIntroduce: Array<(
    { __typename?: 'ArticleDto' }
    & Pick<Types.ArticleDto, 'id' | 'title' | 'introduce' | 'addTime' | 'view_content'>
  )> }
);

export type DeleteArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['Float'];
}>;


export type DeleteArticleQuery = (
  { __typename?: 'Query' }
  & { deleteArticle: (
    { __typename?: 'ArticleDto' }
    & Pick<Types.ArticleDto, 'id' | 'title' | 'article_content' | 'introduce' | 'addTime' | 'view_content' | 'type_id'>
  ) }
);

export type UpdateArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['Float'];
  input: Types.InputArticle;
}>;


export type UpdateArticleQuery = (
  { __typename?: 'Query' }
  & { updateArticle: (
    { __typename?: 'ArticleDto' }
    & Pick<Types.ArticleDto, 'id' | 'title' | 'article_content' | 'introduce' | 'addTime' | 'view_content'>
  ) }
);

export type CreateArticleQueryVariables = Types.Exact<{
  article: Types.InputArticle;
}>;


export type CreateArticleQuery = (
  { __typename?: 'Query' }
  & { createArticle: (
    { __typename?: 'ArticleDto' }
    & Pick<Types.ArticleDto, 'id' | 'title' | 'article_content' | 'introduce' | 'addTime' | 'view_content'>
  ) }
);


export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"article_content"}},{"kind":"Field","name":{"kind":"Name","value":"addTime"}},{"kind":"Field","name":{"kind":"Name","value":"view_content"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"addTime"}},{"kind":"Field","name":{"kind":"Name","value":"view_content"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"getArticlesWithIntroduce"},"name":{"kind":"Name","value":"getArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"addTime"}},{"kind":"Field","name":{"kind":"Name","value":"view_content"}}]}}]}}]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const DeleteArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deleteArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"article_content"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"addTime"}},{"kind":"Field","name":{"kind":"Name","value":"view_content"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}}]}}]} as unknown as DocumentNode<DeleteArticleQuery, DeleteArticleQueryVariables>;
export const UpdateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"updateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"inputArticle"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"article"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"article_content"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"addTime"}},{"kind":"Field","name":{"kind":"Name","value":"view_content"}}]}}]}}]} as unknown as DocumentNode<UpdateArticleQuery, UpdateArticleQueryVariables>;
export const CreateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"createArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"article"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"inputArticle"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"article"},"value":{"kind":"Variable","name":{"kind":"Name","value":"article"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"article_content"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"addTime"}},{"kind":"Field","name":{"kind":"Name","value":"view_content"}}]}}]}}]} as unknown as DocumentNode<CreateArticleQuery, CreateArticleQueryVariables>;