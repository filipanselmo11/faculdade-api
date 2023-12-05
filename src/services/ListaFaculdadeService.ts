import prismaClient from "../prisma";

class ListaFaculdadeService {
  async execute() {
    const faculdades = await prismaClient.faculdade.findMany();

    return faculdades;
  }
}

export { ListaFaculdadeService };
