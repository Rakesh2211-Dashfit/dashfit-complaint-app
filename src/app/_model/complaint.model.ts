export interface ComplaintTypes {
    Id: number;
    TypeName: string;
}


export interface GymDetailsResponse {
    GymId: number;
    GymName: string;
    EmailId: string;
    MobileNo: string;
}

export interface ApiResponse<T> {
    StatusCode: number;
    Message: string;
    Data: T;
  }