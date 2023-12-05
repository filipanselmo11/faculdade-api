import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateFaculdadeController } from './controllers/CreateFaculdadeController';
import { ListaFaculdadeController } from "./controllers/ListaFaculdadeController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.post('/faculdade', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateFaculdadeController().handle(request, reply);
    });

    fastify.get('/faculdades', async(request: FastifyRequest, reply: FastifyReply)=> {
      return new ListaFaculdadeController().handle(request, reply);
    });
}
