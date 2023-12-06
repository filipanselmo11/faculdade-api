import prismaClient from "../prisma";

interface DeleteFaculdadeProps {
  id: string;
}

class DeleteFaculdadeService {
  async execute({ id }: DeleteFaculdadeProps) {
    if (!id) {
      throw new Error("ERRO");
    }

    const findFaculdade = await prismaClient.faculdade.findFirst({
      where: {
        id: id,
      },
    });

    if (!findFaculdade) {
      throw new Error("Faculdade não existe");
    }

    await prismaClient.faculdade.delete({
      where: {
        id: findFaculdade.id,
      },
    });

    return {
        message: "Faculdade Deletada com sucesso"
    }
  }
}

export { DeleteFaculdadeService };
