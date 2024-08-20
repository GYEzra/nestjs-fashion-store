import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function createSwaggerDocument(app): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('Fashion E-commerce API Document')
    .setDescription(
      'Fashion Ecommerce API - Cung cấp các chức năng quản lý sản phẩm, đơn hàng, khách hàng và nhiều hơn nữa để xây dựng và vận hành một trang thương mại điện tử thời trang.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'token',
    )
    .addSecurityRequirements('token')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  return document;
}
