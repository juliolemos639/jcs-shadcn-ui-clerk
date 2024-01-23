import prisma from "@/lib/prisma";

export const getPropertyById = async (propertyId: string) => {
  try {
    const property = await prisma.property.findUnique({
      where: {
        id: parseInt(propertyId),
      },
    });

    if (!property) return null;

    return property;
  } catch (error: any) {
    throw new Error(error);
  }
};
