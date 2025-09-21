import { Link } from 'next/link'
import { DogCard } from '../components/DogCard'

import type { DogType } from '../types/DogType'

export default function HomePage() {
  const dogs: DogType[] = [
    { name: 'Poodle', image: '/dogs/poodle.jpg' },
    { name: 'Labrador', image: '/dogs/labrador.jpg' },
    { name: 'Bulldog', image: '/dogs/bulldog.jpg' },
  ]

  return (
    <div className='container mx-auto px-6 py-8'>
      <h1 className='text-4xl font-semibold text-gray-800'>Welcome to Dog Paradise</h1>
      <p className='mt-6 text-gray-600 text-lg'>Discover different breeds of dogs and learn interesting facts about them.</p>
      <div className='grid grid-cols-3 gap-6 mt-8'>
        {dogs.map((dog) => (
          <DogCard key={dog.name} dog={dog} />
        ))}
      </div>
      <div className='mt-8'>
        <Link href='/about'>About Us</Link>
      </div>
    </div>
  )
}