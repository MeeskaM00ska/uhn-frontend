import Image from 'next/image'
import flash from '@/assets/images/flash.png';
import {IconButton} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export const Header = () => {
  return (
    <div className={'d-flex align-items-center'} style={{height: '10%'}}>
      <Image
        className={'me-3'}
        src={flash} alt={'Logo'} width={40} />
      <h5 className={'fw-bold me-auto'}>
        Dashboard
      </h5>
      <IconButton className={'me-2'} color={'inherit'}>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton color={'inherit'}>
        <ChevronRightIcon />
      </IconButton>
    </div>
  )
}