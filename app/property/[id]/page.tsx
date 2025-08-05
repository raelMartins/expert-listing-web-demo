import {PropertyPageComponent} from '@/components/property/PropertyPageComponent';
import {ai_properties} from '@/utils/data/ai_generated_properties';

export default function PropertyPage({
  params,
}: {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const property = ai_properties?.find(el => el.id == params.id) || ai_properties[0];

  return <PropertyPageComponent property={property} />;
}
