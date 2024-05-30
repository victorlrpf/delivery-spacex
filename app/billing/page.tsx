import React, { useState } from 'react';
import AddresCard from '../_components/addresCard' ;

type Address = {
    id: number;
    name: string;
    email: string;
    address: string;
    planet: string;
  };

const BillingAdress: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  
    const addresses: Address[] = [
      { id: 1, name: 'Fabrica de foguetes', email: 'fabricaf.contato@gmail.com', address: '1947', planet: 'Marte' },
      { id: 2, name: 'Armazenagem Q12', email: 'armazenagemq12@gmail', address: '1346', planet: 'Marte' },
      { id: 3, name: 'Represa', email: 'guardaagua@gmail', address: 'Amazonas', planet: 'Terra' },
      { id: 4, name: 'Estação espacial 025', email: 'estacaon025@gmail', address: 'orbita da terra', planet: 'terra' },
      { id: 5, name: 'Armazenagem Q23', email: 'armazenagemq23@gmail.com', address: '2399', planet: 'Marte' },
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
  
  export default BillingAdress;