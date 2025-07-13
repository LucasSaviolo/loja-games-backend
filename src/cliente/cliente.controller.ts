import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common'
import { ClienteService } from './cliente.service'

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async todos(@Query('nome') nome?: string) {
    if (nome) return this.clienteService.buscarPorNome(nome)
    return this.clienteService.todos()
  }

  @Get(':id')
  async porId(@Param('id') id: string) {
    return this.clienteService.porId(+id)
  }

  @Post()
  async criar(@Body() body: { nome: string; email: string }) {
    return this.clienteService.criar(body)
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() body: { nome: string; email: string }) {
    return this.clienteService.atualizar(+id, body)
  }

  @Delete(':id')
  async excluir(@Param('id') id: string) {
    return this.clienteService.excluir(+id)
  }
}
