enum DaysOfOperation {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface IContact {
  phone?: string;
  email?: string;
}

interface IBusinessHours {
  opening: string;
  closing: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface ISocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface IAdditionalInfo {
  website?: string;
  days_of_operation: DaysOfOperation[];
  business_hours: IBusinessHours;
  coordinates: ICoordinates;
  social_media: ISocialMedia;
}

export interface ILocation {
  _id: string;
  name: string;
  description?: string;
  image: string;
  address: IAddress;
  contact: IContact;
  additional_info: IAdditionalInfo
}

export interface ILocationsFilters {
  name: string ;
}
