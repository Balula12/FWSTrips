import CurrencyInput from '@/components/CurrencyInput';
import Input from '../../components/input';
import DatePIcker from '@/components/DatePIcker';
import React from 'react'
import Button from '@/components/Button';


const TripSearch = () => {
  return (
    <div className='containter mx-auto p-5 bg-search-background bg-cover bg-no-repeat'>
      <h1 className='font-semibold text-2xl text-center text-primaryDarker'>
        Encontre sua próxima <span className='text-primary'>viagem!</span>
      </h1>
      <div className='flex flex-col gap-4 mt-5'>
        <Input placeholder='Onde você quer ir' />

        <div className='flex gap-4'>
          <DatePIcker placeholderText='Data de ida' onChange={() => {} } className='w-full' />
          
          <CurrencyInput placeholder= 'Orçamento' className='w-full'/>
          
        </div>
        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;

