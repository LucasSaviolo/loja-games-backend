import { Body, Controller, Get, Param, Post, Query, Put, Delete } from '@nestjs/common'
import { JogoService } from './jogo.service'

@Controller('jogos')
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Get()
  async todos(@Query('titulo') titulo?: string) {
    if (titulo) return this.jogoService.buscarPorTitulo(titulo)
    return this.jogoService.todos()
  }

  @Get(':id')
  async porId(@Param('id') id: string) {
    return this.jogoService.porId(+id)
  }

  @Post()
  async criar(@Body() body: { titulo: string; preco: number; quantidade: number }) {
    return this.jogoService.criar(body)
  }

  @Put(':id') 
  async atualizar(@Param('id') id: string, @Body() body: { titulo: string; preco: number; quantidade: number }) {
    return this.jogoService.atualizar(+id, body)
  }

  @Delete(':id')
  async excluir(@Param('id') id: string) {
    return this.jogoService.deletar(+id)
  }
}
