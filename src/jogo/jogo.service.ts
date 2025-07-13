import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class JogoService {
  constructor(private prisma: PrismaService) {}

  async todos() {
    return this.prisma.jogo.findMany()
  }

  async porId(id: number) {
    return this.prisma.jogo.findUnique({ where: { id } })
  }

  async buscarPorTitulo(titulo: string) {
    return this.prisma.jogo.findMany({
      where: {
        titulo: {
          contains: titulo,
        },
      },
    })
  }

  async criar(data: { titulo: string; preco: number; quantidade: number }) {
    return this.prisma.jogo.create({ data })
  }

  async atualizar(id: number, data: { titulo: string; preco: number; quantidade: number }) {
  return this.prisma.jogo.update({
    where: { id },
    data,
  })
}

  async deletar(id: number) {
    return this.prisma.jogo.delete({ where: { id } })
  }
}
