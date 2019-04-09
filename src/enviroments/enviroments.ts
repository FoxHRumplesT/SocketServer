
export const enviroments: Enviroments = {
  SERVER_PORT: Number(process.env.PORT) || 3000
}

interface Enviroments {
  SERVER_PORT: number
}
