import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ArticleDto = {
  __typename?: 'ArticleDto';
  addTime: Scalars['Float'];
  article_content: Scalars['String'];
  id: Scalars['Float'];
  introduce: Scalars['String'];
  title: Scalars['String'];
  type_id: Scalars['String'];
  view_content: Scalars['Float'];
};

export type CreateBlogContentDto = {
  __typename?: 'CreateBlogContentDto';
  content: Scalars['String'];
  id: Scalars['Float'];
  introduce: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createblogContent: CreateBlogContentDto;
};


export type MutationCreateblogContentArgs = {
  data: InputblogContent;
};

export type Query = {
  __typename?: 'Query';
  blogContent: Array<CreateBlogContentDto>;
  createArticle: ArticleDto;
  deleteArticle: ArticleDto;
  getArticle: ArticleDto;
  getArticles: Array<ArticleDto>;
  type: Array<TypeDto>;
  updateArticle: ArticleDto;
};


export type QueryBlogContentArgs = {
  id: Scalars['Float'];
};


export type QueryCreateArticleArgs = {
  article: InputArticle;
};


export type QueryDeleteArticleArgs = {
  id: Scalars['Float'];
};


export type QueryGetArticleArgs = {
  id: Scalars['Float'];
};


export type QueryUpdateArticleArgs = {
  article: InputArticle;
  id: Scalars['Float'];
};

export type TypeDto = {
  __typename?: 'TypeDto';
  icon: Scalars['String'];
  id: Scalars['Float'];
  orderNum: Scalars['Float'];
  typeName: Scalars['String'];
};

export type InputArticle = {
  article_content: Scalars['String'];
  introduce: Scalars['String'];
  title: Scalars['String'];
  type_id: Scalars['Float'];
};

export type InputblogContent = {
  content: Scalars['String'];
  introduce: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "ArticleDto",
        "fields": [
          {
            "name": "addTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "article_content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "introduce",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "view_content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateBlogContentDto",
        "fields": [
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "introduce",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createblogContent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreateBlogContentDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "blogContent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CreateBlogContentDto",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "article",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getArticles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ArticleDto",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TypeDto",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "updateArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "article",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TypeDto",
        "fields": [
          {
            "name": "icon",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "orderNum",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "typeName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;
export type WithTypename<T extends { __typename?: any }> = T & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  ArticleDto?: (data: WithTypename<ArticleDto>) => null | string,
  CreateBlogContentDto?: (data: WithTypename<CreateBlogContentDto>) => null | string,
  TypeDto?: (data: WithTypename<TypeDto>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    type?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<TypeDto> | string>>,
    blogContent?: GraphCacheResolver<WithTypename<Query>, QueryBlogContentArgs, Array<WithTypename<CreateBlogContentDto> | string>>,
    getArticle?: GraphCacheResolver<WithTypename<Query>, QueryGetArticleArgs, WithTypename<ArticleDto> | string>,
    getArticles?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<ArticleDto> | string>>,
    updateArticle?: GraphCacheResolver<WithTypename<Query>, QueryUpdateArticleArgs, WithTypename<ArticleDto> | string>,
    deleteArticle?: GraphCacheResolver<WithTypename<Query>, QueryDeleteArticleArgs, WithTypename<ArticleDto> | string>,
    createArticle?: GraphCacheResolver<WithTypename<Query>, QueryCreateArticleArgs, WithTypename<ArticleDto> | string>
  },
  ArticleDto?: {
    id?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['Float'] | string>,
    type_id?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['String'] | string>,
    article_content?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['String'] | string>,
    introduce?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['String'] | string>,
    addTime?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['Float'] | string>,
    view_content?: GraphCacheResolver<WithTypename<ArticleDto>, Record<string, never>, Scalars['Float'] | string>
  },
  CreateBlogContentDto?: {
    id?: GraphCacheResolver<WithTypename<CreateBlogContentDto>, Record<string, never>, Scalars['Float'] | string>,
    title?: GraphCacheResolver<WithTypename<CreateBlogContentDto>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<CreateBlogContentDto>, Record<string, never>, Scalars['String'] | string>,
    introduce?: GraphCacheResolver<WithTypename<CreateBlogContentDto>, Record<string, never>, Scalars['String'] | string>,
    content?: GraphCacheResolver<WithTypename<CreateBlogContentDto>, Record<string, never>, Scalars['String'] | string>
  },
  TypeDto?: {
    id?: GraphCacheResolver<WithTypename<TypeDto>, Record<string, never>, Scalars['Float'] | string>,
    typeName?: GraphCacheResolver<WithTypename<TypeDto>, Record<string, never>, Scalars['String'] | string>,
    orderNum?: GraphCacheResolver<WithTypename<TypeDto>, Record<string, never>, Scalars['Float'] | string>,
    icon?: GraphCacheResolver<WithTypename<TypeDto>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  createblogContent?: GraphCacheOptimisticMutationResolver<MutationCreateblogContentArgs, WithTypename<CreateBlogContentDto>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    createblogContent?: GraphCacheUpdateResolver<{ createblogContent: WithTypename<CreateBlogContentDto> }, MutationCreateblogContentArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};