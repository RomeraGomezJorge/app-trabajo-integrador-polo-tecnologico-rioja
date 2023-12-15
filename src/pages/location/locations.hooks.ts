import {useEffect, useState} from 'react';
import { ApiError,ApiResponse, apiGet, apiPost } from '../../services/apiService';


enum DaysOfOperation {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface Contact {
  phone?: string;
  email?: string;
}

interface BusinessHours {
  opening: string;
  closing: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface AdditionalInfo {
  website?: string;
  days_of_operation: DaysOfOperation[];
  business_hours: BusinessHours;
  coordinates: Coordinates;
  social_media: SocialMedia;
}

export interface Location {
  _id: string;
  name: string;
  description?: string;
  image: string;
  address: Address;
  contact: Contact;
  additional_info: AdditionalInfo
}

export interface UseLocationsQuery {
  name: string ;
}
