import { FastifyRequest, FastifyReply } from "fastify";
import { ListaFaculdadeService } from "../services/ListaFaculdadeService";

class ListaFaculdadeController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listaFaculdadeService = new ListaFaculdadeService();
        const faculdades = await listaFaculdadeService.execute();
        reply.send(faculdades);
    }
}

export { ListaFaculdadeController }