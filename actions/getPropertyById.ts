import prismadb from "@/lib/prismadb";

export const getPropertyById = async (propertyId: string) => {
  try {
    const property = await prismadb.property.findUnique({
      where: {
        id: propertyId,
      },
      include: {
        rooms: true,
      },
    });

    if (!property) return null;

    return property;
  } catch (error: any) {
    throw new Error(error);
  }
};
