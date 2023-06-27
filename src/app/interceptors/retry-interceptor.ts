import { RetryConfig, retry } from "rxjs";
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export const retryInterceptor = (config: RetryConfig) =>
    (req: HttpRequest<unknown>, next: HttpHandlerFn) =>
        next(req).pipe(retry(config));