import Link from 'next/link';
import { LiaSearchLocationSolid } from "react-icons/lia";
import { Button } from '../ui/button';

function Logo() {
    return (
        <Button size='icon' asChild>
          <Link href='/'>
            <LiaSearchLocationSolid className='w-6 h-6' />
          </Link>
        </Button>
      );
    }
export default Logo;