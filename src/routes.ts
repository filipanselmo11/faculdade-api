import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateFaculdadeController } from './controllers/CreateFaculdadeController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.post('/faculdade', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateFaculdadeController().handle(request, reply);
    });
}
