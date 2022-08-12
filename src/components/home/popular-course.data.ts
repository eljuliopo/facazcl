import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/estacion.jpg',
    title: 'Estaciones de servicio',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/combustible.jpg',
    title: 'Transporte de combustible',
    rating: 5,
    ratingCount: 15,
    price: 20,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/courses/mineria.jpg',
    title: 'División minería',
    rating: 5,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: '/images/courses/inmobiliaria.jpg',
    title: 'Inmobiliaria',
    rating: 5,
    ratingCount: 12,
    price: 30,
    category: 'Intermediate',
  },
  {
    id: 5,
    cover: '/images/courses/rentacar.jpg',
    title: 'Rent a Car',
    rating: 5,
    ratingCount: 32,
    price: 35,
    category: 'Intermediate',
  },
]
