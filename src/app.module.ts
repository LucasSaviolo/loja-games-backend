import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ClienteModule } from './cliente/cliente.module';
import { JogoModule } from './jogo/jogo.module';
import { VendaModule } from './venda/venda.module';
import { ClienteController } from './cliente/cliente.controller';
import { JogoController } from './jogo/jogo.controller';
import { VendaController } from './venda/venda.controller';
import { VendaService } from './venda/venda.service';
import { JogoService } from './jogo/jogo.service';
import { ClienteService } from './cliente/cliente.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, ClienteModule, JogoModule, VendaModule],
  controllers: [ClienteController, JogoController, VendaController],
  providers: [PrismaService, ClienteService, JogoService, VendaService],
})
export class AppModule {}
