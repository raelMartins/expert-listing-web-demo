import {PropertyPageComponent} from '@/components/property/PropertyPageComponent';
import {dummy_properties} from '@/utils/data/property';

export default function PropertyPage({
  params,
}: {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const property = dummy_properties?.find(el => el.id == params.id) || dummy_properties[0];

  return <PropertyPageComponent property={property} />;
}
