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