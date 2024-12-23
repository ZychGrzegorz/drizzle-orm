import { Filter } from "mongodb";
import { getMongoClient } from "../connectors/mongodb";
import { DbCollections } from "../db-collections";
import { GeneralType } from "../schemas/general";
import { TRPCError } from "@trpc/server";

const getGeneralCollection = async () => {
  const client = await getMongoClient();
  const collection = client.collection<GeneralType>(DbCollections.general);
  return collection;
};

const list = async ({ name }: { name: string }) => {
  const collection = await getGeneralCollection();
  const data = await collection.find({ name: name }).toArray();
  console.log(data)
  if (!data) {
    throw new TRPCError({ code: "NOT_FOUND" });
  }
  return data;
};

export const getGeneralService = async () => {
  return {
    collection: await getGeneralCollection(),
    list,
  };
};
