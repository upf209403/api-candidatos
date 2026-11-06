export const docs = {
    openapi: "3.0.3",
    info: {
        title: "API de Urna",
        version: "1.0",
    },
    servers: [{ url: "http://localhost:3000" }],
    paths: {
        "/": {
            get: {
                summary: "Listar todos os candidatos",
                responses: {
                    "200": {
                        description: "Lista de candidatos retornada com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                                example: "67d89f0d51484d4d12345678"
                                            },
                                            nome: {
                                                type: "string",
                                                example: "Zé Gotinha"
                                            },
                                            partido: {
                                                type: "string",
                                                example: "SUS"
                                            },
                                            numero: {
                                                type: "number",
                                                example: 123
                                            },
                                            tipoCandidato: {
                                                type: "string",
                                                example: "VEREADOR"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/buscar-por-id/{id}": {
            get: {
                summary: "Buscar candidato pelo ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID do candidato",
                        schema: {
                            type: "string",
                            example: "67d89f0d51484d4d12345678"
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "Candidato encontrado",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            example: "67d89f0d51484d4d12345678"
                                        },
                                        nome: {
                                            type: "string",
                                            example: "Zé Gotinha"
                                        },
                                        partido: {
                                            type: "string",
                                            example: "SUS"
                                        },
                                        numero: {
                                            type: "number",
                                            example: 123
                                        },
                                        tipoCandidato: {
                                            type: "string",
                                            example: "VEREADOR"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        description: "Candidato não encontrado",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    nullable: true
                                }
                            }
                        }
                    }
                }
            }
        },

        "/atualizar-candidato": {
            put: {
                summary: "Atualizar candidato",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        example: "67d89f0d51484d4d12345678"
                                    },
                                    nome: {
                                        type: "string",
                                        example: "Zé Gotinha"
                                    },
                                    partido: {
                                        type: "string",
                                        example: "SUS"
                                    },
                                    numero: {
                                        type: "number",
                                        example: 123
                                    },
                                    tipoCandidato: {
                                        type: "string",
                                        example: "VEREADOR"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Candidato atualizado com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        mensagem: {
                                            type: "string",
                                            example: "Candidato atualizado com sucesso"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/criar-candidato": {
            post: {
                summary: "Cadastrar candidato",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    nome: {
                                        type: "string",
                                        example: "Zé Gotinha"
                                    },
                                    partido: {
                                        type: "string",
                                        example: "SUS"
                                    },
                                    numero: {
                                        type: "number",
                                        example: 123
                                    },
                                    tipoCandidato: {
                                        type: "string",
                                        example: "VEREADOR"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "201": {
                        description: "Cadastro concluído",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        mensagem: {
                                            type: "string",
                                            example: "Candidato salvo com sucesso"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/excluirCandidato/{id}": {
            delete: {
                summary: "Excluir candidato",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID do candidato",
                        schema: {
                            type: "string",
                            example: "67d89f0d51484d4d12345678"
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "Candidato excluído com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        mensagem: {
                                            type: "string",
                                            example: "Candidato excluido com sucesso"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        description: "Erro ao excluir candidato",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        mensagem: {
                                            type: "string",
                                            example: "Erro ao excluir candidato"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}