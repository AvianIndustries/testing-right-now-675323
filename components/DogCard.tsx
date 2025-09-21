import type { DogType } from '../types/DogType'

export function DogCard({ dog }: { dog: DogType }) {
  return (
    <div className='card rounded-lg overflow-hidden shadow-lg'>
      <img className='w-full h-48 object-cover' src={dog.image} alt={dog.name} />
      <div className='p-6'>
        <h2 className='text-lg font-semibold text-gray-800'>{dog.name}</h2>
      </div>
    </div>
  )
}