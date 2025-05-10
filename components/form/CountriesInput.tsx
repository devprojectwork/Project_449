'use client';

import countries from 'i18n-iso-countries';
import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const name = 'country';

function CountriesInput({ defaultValue }: { defaultValue?: string }) {
  const [countryList, setCountryList] = useState<{ name: string; code: string }[]>([]);

  useEffect(() => {
    const countryNames = countries.getNames('en', { select: 'official' });
    const list = Object.entries(countryNames).map(([code, name]) => ({
      code,
      name,
    }));
    setCountryList(list);
  }, []);

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Country
      </Label>
      <Select
        defaultValue={defaultValue}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue placeholder='Select a country' />
        </SelectTrigger>
        <SelectContent>
          {countryList.map((item) => (
            <SelectItem key={item.code} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountriesInput;
