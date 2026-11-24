import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  // Allow only the Angular dev server to call this API from the browser.
  app.enableCors({ origin: 'http://localhost:4200' });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
