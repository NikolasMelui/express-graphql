import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const curSchema = buildSchema(`
	type Query {
		hello: String
		number: Int
	}
`);

const root = {
	hello: () => 'Hello, Rinat!',
	number: () => 123 * 4,
};

const server = express();

server.use(
	'/graphql',
	graphqlHTTP({
		schema: curSchema,
		rootValue: root,
		graphiql: true,
	})
);

server.listen(3000, () => global.console.log(`Server is listening on port 3000`));

// curl -X POST \
// -H "Content-Type: application/json" \
// -d '{"query": "{ hello }"}' \
// http://localhost:4000/graphql
