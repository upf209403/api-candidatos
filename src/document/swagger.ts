export const docs = {
    openapi: "3.0.3",
    info: {
        title: "API de Urna",
        version: "1.0",
    },
    servers: [{ url: "http://localhost:3000" }],
    paths: {
        "/": {

        },

        "/buscar-por-id/{id}": {

        },

        "/atualizar-candidato": {

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
                }
            },
            response: {
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
        },

        "/excluirCandidato/{id}": {

        }

    }
}