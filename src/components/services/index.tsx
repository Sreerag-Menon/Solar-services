"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CctvIcon, HomeAutomation, SolarIcon } from '@/utils/svg';
import './service.css'
import { inter, lato } from '@/utils/fonts';

const StyledContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '28px',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    color: 'gray',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        top: '20px',
    },
}));

const StyledTabsContainer = styled('div')(({ theme }) => ({
    width: '75%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        padding: '8px',
        height: '50vh',
    },
}));

const serviceData = [
    {
        title: 'Service 1',
        description: 'Description for Service 1',
    },
    {
        title: 'Service 2',
        description: 'Description for Service 2',
    },
    {
        title: 'Service 2',
        description: 'Description for Service 2',
    },
    {
        title: 'Service 2',
        description: 'Description for Service 2',
    },
    {
        title: 'Service 2',
        description: 'Description for Service 2',
    },
    // Add more service data as needed
];

export const Services: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledContainer>
            <h3 className={`text-4xl sm:text-6xl md:text-8xl font-bold text-custom-green mb-4 ${inter.className} ${lato.style} text-center`}>
                Services
            </h3>
            <StyledTabsContainer>
                <Box sx={{ width: '100%', bgcolor: 'white' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        textColor='primary'
                        allowScrollButtonsMobile
                    >
                        <Tab icon={<SolarIcon />} className='text-sm' label='Solar services' />
                        <Tab icon={<CctvIcon />} className='text-sm' label="CCTV services" />
                        <Tab icon={<HomeAutomation />} label="Home Automation" className='text-sm' />
                        <Tab label="Item Four" />
                        <Tab label="Item Five" />
                        <Tab label="Item Six" />
                        <Tab label="Item Seven" />
                    </Tabs>
                </Box>
                <div className='w-full flex flex-col justify-center mt-5 p-3'>
                    <h2 className='text-black'>{serviceData[value].title}</h2>
                    <p className='text-black'>{serviceData[value].description}</p>
                </div>
            </StyledTabsContainer>
        </StyledContainer>
    );
};
