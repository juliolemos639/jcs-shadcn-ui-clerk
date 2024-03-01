import { getPropertyById } from "@/actions/getPropertyById";
import { auth } from "@/app/firebase";
import AddPropertyForm from "@/components/property/AddPropertyForm";

interface PropertyPageProps {
  params: {
    propertyId: string;
  };
}

const Property = async ({ params }: PropertyPageProps) => {
  const property = await getPropertyById(params.propertyId);
  // const {userId} = auth()

  // if (!userId) return <div>Não autorizado...</div>;

  // if (property && property.userId !== userId) <div>Acesso Negado</div>;

  return (
    <div>
      <AddPropertyForm property={property} />
    </div>
  );
};

export default Property;
