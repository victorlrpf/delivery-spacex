'use client';

import { useState } from 'react';
import { Input } from '../_components/ui/input';
import { CrossIcon, SearchIcon } from 'lucide-react';
import { Button } from '../_components/ui/button';
import ShippingAdress from '../shipping/page';
import BillingAdress from '../billing/page';
import Link from 'next/link';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('shipping');

  return (
    <div className="tabs">
      <div className="flex border-b justify-evenly">
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === 'shipping' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('shipping')}
        >
          Shipping address
        </button>
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === 'billing' ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('billing')}
        >
          Billing address
        </button>
      </div>
      <div className='flex mt-4 gap-2 justify-evenly '>
        <Input type='text' placeholder='&#128269; Proceure pelo enderço aqui' />
        {activeTab === 'shipping' && 
        <Button variant='outline' size='icon'>
          <Link href='/edit/editShipping'>
            <CrossIcon/>
          </Link>
        </Button>}
        {activeTab === 'billing' &&
        <Button variant='outline' size='icon'>
          <Link href='/edit/editBilling'>
            <CrossIcon/>
          </Link>
        </Button>}
      </div>
      <div>
        <h2 className=' font-semibold mt-2'>Lista de Endereço</h2>
      </div>
      <div className="p-4">
        {activeTab === 'shipping' && <ShippingAdress/>}
        {activeTab === 'billing' && <BillingAdress/>}
      </div>
    </div>
  );
};

export default Tabs;
