"use client";
import Navigation from "../components/Navigation"
import { LayoutGridDemo } from "../components/LayoutGridDemo";
import { MainHeader } from "../components/MainHeader";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function HomePage() {
  return (
    <div >
      <Navigation />

      <div className="flex h-screen ">
        <MainHeader />
        <KeyboardArrowDownIcon 
    sx={{ 
      color: 'white', 
      fontSize: '2rem',
      cursor: 'pointer'
    }} 
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4" />
</div>


      <LayoutGridDemo/>
    </div>
  );
}
