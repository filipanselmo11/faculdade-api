import prismaClient from "../prisma";

interface CreateFaculdadeProps {
  nome: string;
  email: string;
}

class CreateFaculdadeService {
  async execute({ nome, email }: CreateFaculdadeProps) {
    if (!nome || !email) {
      throw new Error("Preencha todos os campos");
    }

    const faculdade = await prismaClient.faculdade.create({
      data: {
        nome,
        email,
        status: true,
      },
    });

    return faculdade;
  }
}

export { CreateFaculdadeService }