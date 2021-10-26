import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Url: any;
};

export type Meta = {
  __typename?: 'Meta';
  count?: Maybe<Scalars['Int']>;
};

export type Notification = {
  __typename?: 'Notification';
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type Stat = {
  __typename?: 'Stat';
  likes?: Maybe<Scalars['Int']>;
  responses?: Maybe<Scalars['Int']>;
  retweets?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  Author?: Maybe<User>;
  Stats?: Maybe<Stat>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  avatar_url?: Maybe<Scalars['Url']>;
  first_name?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  createTweet?: Maybe<Tweet>;
  deleteTweet?: Maybe<Tweet>;
  markTweetRead?: Maybe<Scalars['Boolean']>;
};


export type Mutation_RootCreateTweetArgs = {
  body?: Maybe<Scalars['String']>;
};


export type Mutation_RootDeleteTweetArgs = {
  id: Scalars['ID'];
};


export type Mutation_RootMarkTweetReadArgs = {
  id: Scalars['ID'];
};

export type Query_Root = {
  __typename?: 'query_root';
  Notifications?: Maybe<Array<Maybe<Notification>>>;
  NotificationsMeta?: Maybe<Meta>;
  Tweet?: Maybe<Tweet>;
  Tweets?: Maybe<Array<Maybe<Tweet>>>;
  TweetsMeta?: Maybe<Meta>;
  User?: Maybe<User>;
};


export type Query_RootNotificationsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type Query_RootTweetArgs = {
  id: Scalars['ID'];
};


export type Query_RootTweetsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort_field?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['String']>;
};


export type Query_RootUserArgs = {
  id: Scalars['ID'];
};

export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'query_root', Tweets?: Array<{ __typename?: 'Tweet', id: string, body?: string | null | undefined } | null | undefined> | null | undefined };


export const FooDocument = gql`
    query Foo {
  Tweets {
    id
    body
  }
}
    `;

export function useFooQuery(options: Omit<Urql.UseQueryArgs<FooQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FooQuery>({ query: FooDocument, ...options });
};
export type WithTypename<T extends { __typename?: any }> = { [K in Exclude<keyof T, '__typename'>]?: T[K] } & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Meta?: (data: WithTypename<Meta>) => null | string,
  Notification?: (data: WithTypename<Notification>) => null | string,
  Stat?: (data: WithTypename<Stat>) => null | string,
  Tweet?: (data: WithTypename<Tweet>) => null | string,
  User?: (data: WithTypename<User>) => null | string
}

export type GraphCacheResolvers = {
  query_root?: {
    Tweet?: GraphCacheResolver<WithTypename<Query_Root>, Query_RootTweetArgs, WithTypename<Tweet> | string>,
    Tweets?: GraphCacheResolver<WithTypename<Query_Root>, Query_RootTweetsArgs, Array<WithTypename<Tweet> | string>>,
    TweetsMeta?: GraphCacheResolver<WithTypename<Query_Root>, Record<string, never>, WithTypename<Meta> | string>,
    User?: GraphCacheResolver<WithTypename<Query_Root>, Query_RootUserArgs, WithTypename<User> | string>,
    Notifications?: GraphCacheResolver<WithTypename<Query_Root>, Query_RootNotificationsArgs, Array<WithTypename<Notification> | string>>,
    NotificationsMeta?: GraphCacheResolver<WithTypename<Query_Root>, Record<string, never>, WithTypename<Meta> | string>
  },
  Meta?: {
    count?: GraphCacheResolver<WithTypename<Meta>, Record<string, never>, Scalars['Int'] | string>
  },
  Notification?: {
    id?: GraphCacheResolver<WithTypename<Notification>, Record<string, never>, Scalars['ID'] | string>,
    date?: GraphCacheResolver<WithTypename<Notification>, Record<string, never>, Scalars['Date'] | string>,
    type?: GraphCacheResolver<WithTypename<Notification>, Record<string, never>, Scalars['String'] | string>
  },
  Stat?: {
    views?: GraphCacheResolver<WithTypename<Stat>, Record<string, never>, Scalars['Int'] | string>,
    likes?: GraphCacheResolver<WithTypename<Stat>, Record<string, never>, Scalars['Int'] | string>,
    retweets?: GraphCacheResolver<WithTypename<Stat>, Record<string, never>, Scalars['Int'] | string>,
    responses?: GraphCacheResolver<WithTypename<Stat>, Record<string, never>, Scalars['Int'] | string>
  },
  Tweet?: {
    id?: GraphCacheResolver<WithTypename<Tweet>, Record<string, never>, Scalars['ID'] | string>,
    body?: GraphCacheResolver<WithTypename<Tweet>, Record<string, never>, Scalars['String'] | string>,
    date?: GraphCacheResolver<WithTypename<Tweet>, Record<string, never>, Scalars['Date'] | string>,
    Author?: GraphCacheResolver<WithTypename<Tweet>, Record<string, never>, WithTypename<User> | string>,
    Stats?: GraphCacheResolver<WithTypename<Tweet>, Record<string, never>, WithTypename<Stat> | string>
  },
  User?: {
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    username?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    first_name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    last_name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    full_name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    avatar_url?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Url'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  createTweet?: GraphCacheOptimisticMutationResolver<MutationCreateTweetArgs, Maybe<WithTypename<Tweet>>>,
  deleteTweet?: GraphCacheOptimisticMutationResolver<MutationDeleteTweetArgs, Maybe<WithTypename<Tweet>>>,
  markTweetRead?: GraphCacheOptimisticMutationResolver<MutationMarkTweetReadArgs, Maybe<Scalars['Boolean']>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    createTweet?: GraphCacheUpdateResolver<{ createTweet: Maybe<WithTypename<Tweet>> }, Mutation_RootCreateTweetArgs>,
    deleteTweet?: GraphCacheUpdateResolver<{ deleteTweet: Maybe<WithTypename<Tweet>> }, Mutation_RootDeleteTweetArgs>,
    markTweetRead?: GraphCacheUpdateResolver<{ markTweetRead: Maybe<Scalars['Boolean']> }, Mutation_RootMarkTweetReadArgs>
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
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Meta",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Notification",
        "fields": [
          {
            "name": "date",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Stat",
        "fields": [
          {
            "name": "likes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "responses",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "retweets",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "views",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Tweet",
        "fields": [
          {
            "name": "Author",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "Stats",
            "type": {
              "kind": "OBJECT",
              "name": "Stat",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "body",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "date",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
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
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "first_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "full_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
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
            "name": "last_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "createTweet",
            "type": {
              "kind": "OBJECT",
              "name": "Tweet",
              "ofType": null
            },
            "args": [
              {
                "name": "body",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteTweet",
            "type": {
              "kind": "OBJECT",
              "name": "Tweet",
              "ofType": null
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
            "name": "markTweetRead",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
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
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "Notifications",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Notification",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "NotificationsMeta",
            "type": {
              "kind": "OBJECT",
              "name": "Meta",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "Tweet",
            "type": {
              "kind": "OBJECT",
              "name": "Tweet",
              "ofType": null
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
            "name": "Tweets",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Tweet",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort_field",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort_order",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "TweetsMeta",
            "type": {
              "kind": "OBJECT",
              "name": "Meta",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "User",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
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