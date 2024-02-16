export interface IShipment {
  CreateDate: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string | null;
  SupportPhoneNumbers: number[];
  TrackingNumber: string;
  TrackingURL: string;
  TransitEvents: {
    state: string;
    timestamp: string;
    exceptionCode?: string;
    reason?: string;
  }[];
  isEditableShipment: boolean;
  nextWorkingDay: {
    dayDate: string;
    dayName: string;
  }[];
  provider: string;
}
