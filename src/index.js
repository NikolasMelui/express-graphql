import express from 'express';

const server = express();

server.listen(3000, () => global.console.log(`Server is listening on port 3000`));
