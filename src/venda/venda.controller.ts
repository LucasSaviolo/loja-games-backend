import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { VendaService } from './venda.service';

@Controller('vendas')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Get()
  async todas(@Query('nome') nome?: string) {
    if (nome) return this.vendaService.buscarPorClienteNome(nome);
    return this.vendaService.todos();
  }

  @Get(':id')
  async porId(@Param('id') id: string) {
    return this.vendaService.porId(+id);
  }

  @Post()
  async criar(@Body() body: { clienteId: number; jogoId: number; quantidade: number; valorTotal: number }) {
    return this.vendaService.criar(body);
  }
}
