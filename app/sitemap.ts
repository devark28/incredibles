import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://incredibles.co.rw',
      lastModified: new Date(),
    },
    {
      url: 'https://incredibles.co.rw/services',
      lastModified: new Date(),
    },
    {
      url: 'https://incredibles.co.rw/contacts',
      lastModified: new Date(),
    },
    {
      url: 'https://incredibles.co.rw/terms',
      lastModified: new Date(),
    },
  ]
}