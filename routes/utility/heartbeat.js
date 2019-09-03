const schema = {
  description: 'Life check',
  summary: 'Life check',
  tags: ['Utility'],
  response: {
    200: {
      type: 'string',
    },
  },
};

const handler = (req, reply) => {
  reply.send(new Date());
};

module.exports = {
  method: 'GET',
  url: '/heartbeat',
  handler,
  schema,
};
