import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async todos() {
    return this.prisma.cliente.findMany()
  }

  async porId(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } })
  }

  async buscarPorNome(nome: string) {
    return this.prisma.cliente.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
    })
  }

  async criar(data: { nome: string; email: string }) {
    return this.prisma.cliente.create({ data })
  }

  async atualizar(id: number, data: { nome: string; email: string }) {
  return this.prisma.cliente.update({
    where: { id },
    data,
  })
}

async excluir(id: number) {
  return this.prisma.cliente.delete({
    where: { id },
  })
}

}
