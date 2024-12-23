import { getGeneralService } from "./general";

export const getServices = async () => {
    return {
      generalService: await getGeneralService(),
  
    };
  };