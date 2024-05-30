// components/AddressCard.tsx
import React from 'react';
import { Button } from './ui/button';

type AddressCardProps = {
  name: string;
  email: string;
  address: string;
  planet: string;
  isSelected: boolean;
  onSelect: () => void;
};

const AddressCard: React.FC<AddressCardProps> = ({ name, email, address, planet, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`border ${isSelected ? 'border-purple-500' : 'border-gray-300'} rounded-lg p-4 mb-4 cursor-pointer`}
    >
      <div className="flex justify-between items-center">
        <span className={`font-bold ${isSelected ? 'text-purple-500' : 'text-gray-600'}`}>{planet}</span>
        <input type="radio" checked={isSelected} readOnly />
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>{email}</p>
      <p>{address}</p>
      <div className='flex justify-evenly mt-2'>
        <Button size='sm' variant='outline' className=' bg-blue-500 text-white'>Edit address</Button>
        <Button size='sm' variant='outline' className='bg-red-500 text-white'>Delete address</Button>
      </div>
    </div>
  );
};

export default AddressCard;
