import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compresstion from 'compression';
import multer from 'multer';

import { Logger } from './middlewares/logger';

import swaggerUI from 'swagger-ui-express';
import swaggerSpec from '../schemas.json';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(Logger.log);

app.use(bodyParser.json());

app.use(helmet());

// To define the routes.

// app.use('/auth', router);

app.use(compresstion());

const server = http.createServer(app);

export { server, app };
