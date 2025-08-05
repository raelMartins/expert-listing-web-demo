import ImageSlider from '@/components/gallery/ImageSlider';
import {dummy_property_images} from '@/utils/data/property';
import {Center} from '@chakra-ui/react';

export default function TestPage() {
  const images = [
    {src: 'https://placehold.co/1000x600/1e293b/ffffff?text=Image+1', alt: 'Image 1'},
    {src: 'https://placehold.co/1000x600/365314/ffffff?text=Image+2', alt: 'Image 2'},
    {src: 'https://placehold.co/1000x600/4c0519/ffffff?text=Image+3', alt: 'Image 3'},
    {src: 'https://placehold.co/1000x600/0f172a/ffffff?text=Image+4', alt: 'Image 4'},
    {src: 'https://placehold.co/1000x600/2c0f16/ffffff?text=Image+5', alt: 'Image 5'},
  ];
  return (
    <Center p={`40px`}>
      <ImageSlider images={dummy_property_images} />
    </Center>
  );
}
