'use client';

import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { MdCastle, MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach side!',
  },
  {
    label: 'Windmill',
    icon: GiWindmill,
    description: 'This property windmill',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is Modern',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property is has Pools',
  },
  {
    label: 'Island',
    icon: GiIsland,
    description: 'This property is on an Island',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities',
  },
  {
    label: 'Castle',
    icon: MdCastle,
    description: 'This property is in a Castle',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities',
  },
  {
    label: 'Artic',
    icon: BsSnow,
    description: 'This property is Modern',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is in a Cave',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in a desert',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is Luxurious',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className='pt-4 flex flex-row items-center
       justify-between overflow-x-auto'
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
