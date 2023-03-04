export interface HttpClientInterface {
    get<T> (request: Request): Promise<Response>
}
