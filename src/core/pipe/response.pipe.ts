import {IResponse} from "../adapter/response";
import {Pipe} from "./pipe";

export class ResponsePipe extends Pipe<IResponse> {
  
  public create(response: IResponse): IResponse { return response; }
  
  public find(response: IResponse): IResponse { return response; }
  
  public findOne(response: IResponse): IResponse { return response; }
  
  public save(response: IResponse): IResponse { return response; }
  
  public destroy(response: IResponse): IResponse { return response; }
}
