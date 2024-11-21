
import FirstBar from '@/component/FirstBar';
import FooterPage from './../../component/FooterPage'
import Navbar from "@/component/Navbar";
import { Box } from "@mui/material";
// import dynamic from 'next/dynamic';

// const Footer = dynamic(() => import('@/component/Footer'), { ssr: false });
const CommonLayoutPage = ({ children }) => {
    return (
        <>
        
            <Box sx={{ m: 0, p: 0, width: "100vw", overflowX: "hidden" }}>
                <FirstBar />
            </Box>
            
            <Navbar></Navbar>
            <Box className="min-h-screen">{children}</Box>
            <FooterPage />

        </>
    )
};

export default CommonLayoutPage;
