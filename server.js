'use strict'
const S = require('fluent-schema')

const app = require('fastify')({
  logger: true
})

app.get('/', {
  schema: {
    querystring: S.object()
      .prop('name', S.string().required().default('world'))
      .valueOf(),
    response: {
      200: S.object()
        .prop('ping', S.string())
        .valueOf()
    }
  }
}, async (request, reply) => {
  return { ping: request.query.name, ignored: true }
})

app.listen(3000).catch(console.error)
