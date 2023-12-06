import {useEffect, useState} from 'react';
import { ApiError,ApiResponse, apiGet } from '../../../services/apiService';


enum DaysOfOperation {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

interface Address {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

interface Contact {
  phone?: string;
  email?: string;
}

interface BusinessHours {
  opening: string;
  closing: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface Location {
  _id: string;
  name: string;
  description?: string;
  image: string;
  address: Address;
  contact: Contact;
  additional_info: {
    website?: string;
    days_of_operation: DaysOfOperation[];
    business_hours: BusinessHours;
    coordinates: Coordinates;
    social_media: SocialMedia;
  };
}

export interface UseLocationsQuery {
  name: string ;
}

export const useLocations = (query?: UseLocationsQuery) => {
  const [data, setData] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiError>();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet<ApiResponse>('/location', { params: query });
        
        if(response?.status === 'fail' && response?.message){
          setError({
            code: 500,
            message: response?.message,
            error: response?.message,
          });
        }else if(response?.data){
          setData(response.data)  
        }
        
      } catch (error: any) {
        setError({
          code: error.code,
          message: error.message,
          error: error.name,
        });
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, isLoading, error };
};
