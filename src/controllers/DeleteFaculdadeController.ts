import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteFaculdadeService } from "../services/DeleteFaculdadeService";

class DeleteFaculdadeController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string };
        const deleteFaculdadeService = new DeleteFaculdadeService();
        const faculdade = await deleteFaculdadeService.execute({ id });
        reply.send(faculdade);
    }
}

export { DeleteFaculdadeController }