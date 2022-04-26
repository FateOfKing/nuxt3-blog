"use strict";
exports.__esModule = true;
exports["default"] = {
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
};
