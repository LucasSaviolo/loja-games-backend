import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {}

  async todos() {
    return this.prisma.venda.findMany({
      include: {
        cliente: true,
        jogo: true,
      },
    })
  }

  async porId(id: number) {
    return this.prisma.venda.findUnique({
      where: { id },
      include: {
        cliente: true,
        jogo: true,
      },
    })
  }

  async criar(data: { clienteId: number; jogoId: number; quantidade: number; valorTotal: number }) {
    const jogo = await this.prisma.jogo.findUnique({ where: { id: data.jogoId } })

    if (!jogo) {
      throw new BadRequestException('Jogo não encontrado.')
    }

    if (jogo.quantidade < data.quantidade) {
      throw new BadRequestException('Quantidade em estoque insuficiente.')
    }

    await this.prisma.jogo.update({
      where: { id: data.jogoId },
      data: {
        quantidade: jogo.quantidade - data.quantidade
      }
    })

    return this.prisma.venda.create({ data })
  }

  async buscarPorClienteNome(nome: string) {
  return this.prisma.venda.findMany({
    where: {
      cliente: {
        nome: {
          contains: nome
        }
      }
    },
    include: {
      cliente: true,
      jogo: true
    }
  })
}

}
