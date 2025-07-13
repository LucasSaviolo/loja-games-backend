import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = 3008; 
  await app.listen(port);
  console.log(`Porta back: ${port}`);
}
bootstrap();
