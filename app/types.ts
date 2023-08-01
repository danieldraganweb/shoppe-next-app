export type Record = {
    id: string;
  fields: {
      createdTime: string;
      Price: string;
      Name: string;
      Description: string;
      Image: Array<{
        id: string;
        width: number;
        height: number;
        url: string;
        filename: string;
        size: number;
        type: string;
        
        thumbnails: {
          small: { url: string; width: number; height: number };
          large: { url: string; width: number; height: number };
          full: { url: string; width: number; height: number };
        };
      }>;
    };
  };
  