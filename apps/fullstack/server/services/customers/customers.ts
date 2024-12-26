import { getCustomerById } from "./queries/getCustomerById";

export const getCustomersService = async () => {
    return {
        getCustomerById: getCustomerById

    };
  };
  