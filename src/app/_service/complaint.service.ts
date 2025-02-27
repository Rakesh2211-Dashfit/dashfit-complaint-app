import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ComplaintTypes, GymDetailsResponse } from '../_model/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  GetComplaintTypes() {
    return this.http.get<ComplaintTypes[]>(this.baseUrl + 'gym/api/v1/Lkp/GetComplaintTypes');
  }

  FetchGymDetails(QrUniqueId : string){
    return this.http.post<GymDetailsResponse>(this.baseUrl + 'gym/api/v1/Gym/FetchGymDetails?QrUniqueId=' + QrUniqueId,null);
    //return this.http.post<GymDetailsResponse>("https://api-uat.dashfit.in/gym/api/v1/Gym/FetchGymDetails?QrUniqueId=0ca8b95e4f194b958e265ebfc9ed5251");
  }
}
