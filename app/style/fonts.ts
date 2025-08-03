import {Manrope, Outfit} from 'next/font/google';
import localFont from 'next/font/local';

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font_outfit',
});

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font_manrope',
});

export const sfPro = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Text-Light.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-LightItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Light.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-LightItalic.woff',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Regular.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-SemiboldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Bold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-BoldItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Bold.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-BoldItalic.woff',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-sfpro',
});

export const sfProRounded = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Rounded-Ultralight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sfpro-rounded',
});
