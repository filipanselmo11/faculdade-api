import { FastifyRequest, FastifyReply } from "fastify";
import { CreateFaculdadeService } from "../services/CreateFaculdadeService";
class CreateFaculdadeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { nome, email } = request.body as { nome: string; email: string };
    const faculdadeService = new CreateFaculdadeService();
    const faculdade = await faculdadeService.execute({ nome, email });
    reply.send(faculdade);
  }
}

export { CreateFaculdadeController };
