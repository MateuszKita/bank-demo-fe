import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {NewTransferData, Transfer} from "./transfer.model";

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  private readonly transfersUrl: string = `${environment.apiUrl}transfers/`

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  newTransfer(transferData: NewTransferData): Observable<{ login: string }> {
    return this.httpClient.post<{ login: string }>(`${this.transfersUrl}new`, transferData);
  }

  getTransfersHistory(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(`${this.transfersUrl}history`);
  }


}
