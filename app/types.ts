export type Record = {
    id: string;
  fields: {
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
  export type BlogPostRecord = {
    id: string;
    fields: {
      'blog-content': string;
      date: string;
      image: Array<{
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
      name: string;
    };
  };