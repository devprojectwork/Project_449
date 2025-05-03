'use client';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';
<<<<<<< Updated upstream
=======
import { toast } from 'sonner';

>>>>>>> Stashed changes

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';

function BookingCalendar() {
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
<<<<<<< Updated upstream

  useEffect(() => {
=======
  const bookings = useProperty((state) => state.bookings);
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });
  const unavailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast('Some dates are booked. Please select again.');

        return true;
      }
      return false;
    });
>>>>>>> Stashed changes
    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
<<<<<<< Updated upstream
    />
  );
}
export default BookingCalendar;
=======
      // add disabled
      disabled={blockedPeriods}
    />
  );
}
export default BookingCalendar;


>>>>>>> Stashed changes
