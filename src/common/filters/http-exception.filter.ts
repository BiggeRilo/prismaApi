import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status = exception.getStatus();
    const exceptionRespose = exception.getResponse();

    const error =
      typeof response === 'string'
        ? { message: exceptionRespose }
        : (exceptionRespose as object);

    response
      .status(status)
      .json({ ...error, timestamp: new Date().toISOString() });
  }
}
