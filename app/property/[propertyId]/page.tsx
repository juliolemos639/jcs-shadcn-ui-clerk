import { getPropertyById } from "@/actions/getPropertyById";
import AddPropertyForm from "@/components/property/AddPropertyForm";
import { auth } from "@clerk/nextjs";

interface PropertyPageProps {
  params: {
    propertyId: string;
  };
}

const Property = async ({ params }: PropertyPageProps) => {
  const property = await getPropertyById(params.propertyId);
  const { userId } = auth();

  if (!userId) return <div>Não autorizado...</div>;

  if (property && property.userId !== userId) <div>Acesso Negado</div>;

  return (
    <div>
      <AddPropertyForm property={property} />
    </div>
  );
};

export default Property;
