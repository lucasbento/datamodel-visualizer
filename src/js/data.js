export default {
  "data": {
    "viewer": {
      "project": {
        "models": {
          "edges": [
            {
              "node": {
                "name": "User",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "Enum",
                        "name": "roles",
                        "relation": null,
                        "isList": true,
                        "id": "cit1xlcpb0abs0164hi64ae4l"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit1xlcu10abx01647nhifdnp"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "email",
                        "relation": null,
                        "isList": false,
                        "id": "cit1yjv400bsn0164ip563fo3"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "data",
                        "relation": null,
                        "isList": false,
                        "id": "cit1ykgtb0btr0164f06j4g6q"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Int",
                        "name": "burger",
                        "relation": null,
                        "isList": false,
                        "id": "cit5n90ks03su0165z04qdb1r"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "hackathon",
                        "relation": null,
                        "isList": false,
                        "id": "cit5vj9ej04j40126yeqeza2f"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "Search",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit5nbpi303ur0165fr4veywu"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "text",
                        "relation": null,
                        "isList": false,
                        "id": "cit5nc49m03vi0165ib8yljs8"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "questions",
                        "relation": {
                          "rightModel": {
                            "name": "Question"
                          },
                          "fieldOnLeftModel": {
                            "name": "questions",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Search"
                          },
                          "id": "cit5nexz203yy01657jzgujdi",
                          "fieldOnRightModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": true,
                        "id": "cit5nexz203yz0165g41fhdxr"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "session",
                        "relation": {
                          "rightModel": {
                            "name": "Session"
                          },
                          "fieldOnLeftModel": {
                            "name": "session",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "Search"
                          },
                          "id": "cit6hciro0k4x0126qe0956st",
                          "fieldOnRightModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit6hciro0k4y0126nqt4l6bo"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "options",
                        "relation": {
                          "rightModel": {
                            "name": "Option"
                          },
                          "fieldOnLeftModel": {
                            "name": "options",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Search"
                          },
                          "id": "cit6zplbu192m0126tab3f3uc",
                          "fieldOnRightModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": true,
                        "id": "cit6zplbu192n0126glnhwueb"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "surveys",
                        "relation": {
                          "rightModel": {
                            "name": "Search"
                          },
                          "fieldOnLeftModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "Survey"
                          },
                          "id": "cit6zqtk0194y0126cegu5y6b",
                          "fieldOnRightModel": {
                            "name": "surveys",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": true,
                        "id": "cit6zqtk019510126f7ij2i6m"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Int",
                        "name": "index",
                        "relation": null,
                        "isList": false,
                        "id": "cit7kzgnd226901264kfntmu9"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "Question",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit5ncd1o03vt0165lnitbycn"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "answers",
                        "relation": {
                          "rightModel": {
                            "name": "Answer"
                          },
                          "fieldOnLeftModel": {
                            "name": "answers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Question"
                          },
                          "id": "cit5ned8h03xx01652ammm0vf",
                          "fieldOnRightModel": {
                            "name": "question",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": true,
                        "id": "cit5ned8h03xy0165utrtt1vr"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "search",
                        "relation": {
                          "rightModel": {
                            "name": "Question"
                          },
                          "fieldOnLeftModel": {
                            "name": "questions",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Search"
                          },
                          "id": "cit5nexz203yy01657jzgujdi",
                          "fieldOnRightModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit5nexz203z10165e6wbwe1u"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Int",
                        "name": "index",
                        "relation": null,
                        "isList": false,
                        "id": "cit5nls2q045o0165gugm57zi"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "text",
                        "relation": null,
                        "isList": false,
                        "id": "cit5o0zop04he01657v37i3gn"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "sessionquestionanswers",
                        "relation": {
                          "rightModel": {
                            "name": "Question"
                          },
                          "fieldOnLeftModel": {
                            "name": "question",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SessionQuestionAnswer"
                          },
                          "id": "cit70htjz1aff0126fmqahd7x",
                          "fieldOnRightModel": {
                            "name": "sessionquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": true,
                        "id": "cit70htjz1afi0126gdhx4ik0"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "surveyquestionanswers",
                        "relation": {
                          "rightModel": {
                            "name": "Question"
                          },
                          "fieldOnLeftModel": {
                            "name": "question",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SurveyQuestionAnswer"
                          },
                          "id": "cit71r1vf1bx601266b8iz989",
                          "fieldOnRightModel": {
                            "name": "surveyquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": true,
                        "id": "cit71r1vf1bx90126ylm8kst3"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "Answer",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit5ncggo03w20165o2rpf19l"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "question",
                        "relation": {
                          "rightModel": {
                            "name": "Answer"
                          },
                          "fieldOnLeftModel": {
                            "name": "answers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Question"
                          },
                          "id": "cit5ned8h03xx01652ammm0vf",
                          "fieldOnRightModel": {
                            "name": "question",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit5ned8h03y00165b4qadj6i"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Int",
                        "name": "index",
                        "relation": null,
                        "isList": false,
                        "id": "cit5o1vuj04iu0165kfoiv1ns"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "text",
                        "relation": null,
                        "isList": false,
                        "id": "cit5o253n04j7016510xmsf1b"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "sessionquestionanswers",
                        "relation": {
                          "rightModel": {
                            "name": "Answer"
                          },
                          "fieldOnLeftModel": {
                            "name": "answer",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SessionQuestionAnswer"
                          },
                          "id": "cit70ii3d1ags0126yuehmzfo",
                          "fieldOnRightModel": {
                            "name": "sessionquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": true,
                        "id": "cit70ii3d1agv0126vtpw75hf"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "surveyquestionanswers",
                        "relation": {
                          "rightModel": {
                            "name": "Answer"
                          },
                          "fieldOnLeftModel": {
                            "name": "answer",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SurveyQuestionAnswer"
                          },
                          "id": "cit71s2xt1byy0126vezl4t9m",
                          "fieldOnRightModel": {
                            "name": "surveyquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": true,
                        "id": "cit71s2xt1bz101260m8xm0er"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "Session",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit6fp9v90ivm0126nd5a4fqs"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "sessionquestionanswers",
                        "relation": {
                          "rightModel": {
                            "name": "SessionQuestionAnswer"
                          },
                          "fieldOnLeftModel": {
                            "name": "sessionquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Session"
                          },
                          "id": "cit6frfwu0ixz0126zgmdi6h5",
                          "fieldOnRightModel": {
                            "name": "session",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": true,
                        "id": "cit6frfwu0iy00126dbun2wqi"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "search",
                        "relation": {
                          "rightModel": {
                            "name": "Session"
                          },
                          "fieldOnLeftModel": {
                            "name": "session",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "Search"
                          },
                          "id": "cit6hciro0k4x0126qe0956st",
                          "fieldOnRightModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit6hciro0k500126g2dt4edz"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "SessionQuestionAnswer",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit6fqft80iwr012643t3cs7q"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "session",
                        "relation": {
                          "rightModel": {
                            "name": "SessionQuestionAnswer"
                          },
                          "fieldOnLeftModel": {
                            "name": "sessionquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Session"
                          },
                          "id": "cit6frfwu0ixz0126zgmdi6h5",
                          "fieldOnRightModel": {
                            "name": "session",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit6frfwu0iy201261rzxb3bo"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "question",
                        "relation": {
                          "rightModel": {
                            "name": "Question"
                          },
                          "fieldOnLeftModel": {
                            "name": "question",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SessionQuestionAnswer"
                          },
                          "id": "cit70htjz1aff0126fmqahd7x",
                          "fieldOnRightModel": {
                            "name": "sessionquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": false,
                        "id": "cit70htjz1afg01267ue82vry"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "answer",
                        "relation": {
                          "rightModel": {
                            "name": "Answer"
                          },
                          "fieldOnLeftModel": {
                            "name": "answer",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SessionQuestionAnswer"
                          },
                          "id": "cit70ii3d1ags0126yuehmzfo",
                          "fieldOnRightModel": {
                            "name": "sessionquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": false,
                        "id": "cit70ii3d1agt0126r08h27y7"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "Survey",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit6fsepi0iz40126q6lfrwe3"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "surveyquestionanswers",
                        "relation": {
                          "rightModel": {
                            "name": "SurveyQuestionAnswer"
                          },
                          "fieldOnLeftModel": {
                            "name": "surveyquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Survey"
                          },
                          "id": "cit6ftyqe0j150126y34llxhn",
                          "fieldOnRightModel": {
                            "name": "survey",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": true,
                        "id": "cit6ftyqe0j160126jm4fje6v"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "search",
                        "relation": {
                          "rightModel": {
                            "name": "Search"
                          },
                          "fieldOnLeftModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "Survey"
                          },
                          "id": "cit6zqtk0194y0126cegu5y6b",
                          "fieldOnRightModel": {
                            "name": "surveys",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": false,
                        "id": "cit6zqtk0194z01262a0dqp49"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "option",
                        "relation": {
                          "rightModel": {
                            "name": "Survey"
                          },
                          "fieldOnLeftModel": {
                            "name": "surveys",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Option"
                          },
                          "id": "cit700lau19lv0126r1hrt88l",
                          "fieldOnRightModel": {
                            "name": "option",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit700lau19ly0126hmxhj3z5"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "Option",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit6fslw40izg0126a6qncj7m"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "String",
                        "name": "text",
                        "relation": null,
                        "isList": false,
                        "id": "cit6ft2px0j0a0126p4tvxsi8"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "search",
                        "relation": {
                          "rightModel": {
                            "name": "Option"
                          },
                          "fieldOnLeftModel": {
                            "name": "options",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Search"
                          },
                          "id": "cit6zplbu192m0126tab3f3uc",
                          "fieldOnRightModel": {
                            "name": "search",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit6zplbu192p01269c56z84r"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "surveys",
                        "relation": {
                          "rightModel": {
                            "name": "Survey"
                          },
                          "fieldOnLeftModel": {
                            "name": "surveys",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Option"
                          },
                          "id": "cit700lau19lv0126r1hrt88l",
                          "fieldOnRightModel": {
                            "name": "option",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": true,
                        "id": "cit700lau19lw0126u8fauls7"
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "name": "SurveyQuestionAnswer",
                "fields": {
                  "edges": [
                    {
                      "node": {
                        "typeIdentifier": "GraphQLID",
                        "name": "id",
                        "relation": null,
                        "isList": false,
                        "id": "cit6fsrxy0izr012644jy040m"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "survey",
                        "relation": {
                          "rightModel": {
                            "name": "SurveyQuestionAnswer"
                          },
                          "fieldOnLeftModel": {
                            "name": "surveyquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          },
                          "leftModel": {
                            "name": "Survey"
                          },
                          "id": "cit6ftyqe0j150126y34llxhn",
                          "fieldOnRightModel": {
                            "name": "survey",
                            "typeIdentifier": "Relation",
                            "isList": false
                          }
                        },
                        "isList": false,
                        "id": "cit6ftyqe0j1801269z1pi2jx"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "question",
                        "relation": {
                          "rightModel": {
                            "name": "Question"
                          },
                          "fieldOnLeftModel": {
                            "name": "question",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SurveyQuestionAnswer"
                          },
                          "id": "cit71r1vf1bx601266b8iz989",
                          "fieldOnRightModel": {
                            "name": "surveyquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": false,
                        "id": "cit71r1vf1bx70126ef86eel0"
                      }
                    },
                    {
                      "node": {
                        "typeIdentifier": "Relation",
                        "name": "answer",
                        "relation": {
                          "rightModel": {
                            "name": "Answer"
                          },
                          "fieldOnLeftModel": {
                            "name": "answer",
                            "typeIdentifier": "Relation",
                            "isList": false
                          },
                          "leftModel": {
                            "name": "SurveyQuestionAnswer"
                          },
                          "id": "cit71s2xt1byy0126vezl4t9m",
                          "fieldOnRightModel": {
                            "name": "surveyquestionanswers",
                            "typeIdentifier": "Relation",
                            "isList": true
                          }
                        },
                        "isList": false,
                        "id": "cit71s2xt1byz01268mseq8sc"
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
};
