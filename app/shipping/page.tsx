import React, { useState } from 'react';
import AddresCard from '../_components/addresCard' ;

type Address = {
    id: number;
    name: string;
    email: string;
    address: string;
    planet: string;
  };

const ShippingAdress: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  
    const addresses: Address[] = [
      { id: 1, name: 'Casa do Astronomo', email: 'houseA@gmail.com', address: 'Rua Alice Além Daadi, 454', planet: 'Terra' },
      { id: 2, name: 'Armazenagem Q12', email: 'armazenagemq12@gmail', address: '1346', planet: 'Marte' },
      { id: 3, name: 'Armazenagem Q11', email: 'armazenagemq11@gmail', address: '1169', planet: 'Marte' },
      { id: 4, name: 'Casa do Gás', email: 'casadogas@gmail', address: 'Morro das neves, Santos', planet: 'Marte' },
      { id: 5, name: 'Kennedy Space', email: 'kennedyspacenter@gmail.com', address: 'Space Commerce Way, Merritt Island, FL 32953, Estados Unidos', planet: 'Marte' },
    ];
  
    return (
      <div>
        {addresses.map((address) => (
          <AddresCard
            key={address.id}
            name={address.name}
            email={address.email}
            address={address.address}
            planet={address.planet}
            isSelected={selectedAddress === address.id}
            onSelect={() => setSelectedAddress(address.id)}
          />
        ))}
      </div>
    );
  };
  
  export default ShippingAdress;