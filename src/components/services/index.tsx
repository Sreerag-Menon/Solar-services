"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CctvIcon, HomeAutomation, SolarIcon } from '@/utils/svg';

import { inter, lato } from '@/utils/fonts';


const StyledContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '95px',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',


    alignItems: 'center',
    height: '100%',
    color: 'gray',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        position: 'absolute',
        top: '90px'
    },
}));

const StyledTabsContainer = styled('div')(({ theme }) => ({
    width: '75%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
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
            <div className='w-3/4 flex items-start flex-col mb-7 ' >

                <h3 className={`text-3xl sm:text-4xl md:text-7xl font-bold text-custom-green mb-4 ${inter.className} ${lato.style} text-center`}>
                    SERVICES
                </h3>
                <p className={`text-gray-500 text-base ${lato.className} ${inter.style}`}>Embrace Sustainable Living with Our Expert Solar, Security, and Smart Home Solutions.</p>
            </div>
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
