import { getCustomersService } from "./customers/customers";

export const getServices = async () => {
    return {
      customerService: await getCustomersService(),
  
    };
  };