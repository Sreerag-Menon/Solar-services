"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { AccessControl, CctvIcon, EnergyAuditing, GateAutomation, HomeAutomation, IntrusionAlarm, InverterServices, NetworkingService, SolarIcon } from '@/utils/svg';

import { inter, lato } from '@/utils/fonts';

const StyledContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'gray',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    [theme.breakpoints.down('sm')]: {
        paddingTop: '1rem',
        paddingBottom: '4rem',
    },
}));

const StyledTabsContainer = styled('div')(({ theme }) => ({
    width: '75%',
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
    },
}));

const serviceData = [
    {
        title: 'SOLAR ONGRID,OFFGRID & HYBRID SERVICES',
        description: 'If you are thinking for solar product at your home or office, we have solutions for you. Panels, Inverters, AC-DB, DCDB, Earthing Materials, Lightning arrester of branded companies are mainly included in our sales products.',
    },
    {
        title: 'CCTV INSTALLATION AND OTHER SERVICES',
        description: 'Ensure the protection of your staff, visitors, and premises with our comprehensive CCTV maintenance services. Our cost-effective solution offers 24/7, 365-day engineer response and remote diagnostics to minimize call-out costs.',
    },
    {
        title: 'HOME SECURITY AND AUTOMATION',
        description: 'Our offerings enable Smart App based control of switches, curtains, blinds, remote door locks, air conditioners, media devices, camera, video door phones and include monitoring of sensors for safety and security related to smoke, gas leak, door intrusion and more',
    },
    {
        title: 'SEAMLESS GATE AUTOMATION SOLUTIONS',
        description: 'Our team of experts will meticulously install and configure a customized system that caters to your specific needs, ensuring effortless entry and exit for authorized individuals while maintaining robust security measures.',
    },
    {
        title: 'ROBUST INTRUTION ALARM SOLUTIONS',
        description: 'We prioritize user-friendly operation and seamless integration with your existing security infrastructure. Our intrusion alarm systems are designed to be intuitive and easy to use, allowing you to arm and disarm with a simple touch or voice command. Additionally, we offer integration with smart home automation systems, enabling you to control your security from a single centralized platform.',
    },
    {
        title: 'ADVANCED ACCESS CONTROL SOLUTIONS',
        description: 'Our access control systems are designed to be intuitive and easy to use, allowing you to manage access permissions, monitor activity logs, and receive real-time alerts with a few simple clicks or taps. Additionally, we offer integration with smart building automation systems, enabling you to control your access control from a single centralized platform.',
    },
    {
        title: 'SEAMLESS CONNECTIVITY AND NETWORKING SOLUTIONS',
        description: ' We prioritize future-proof solutions that adapt to your evolving needs. Our networking experts stay up-to-date with the latest technologies and industry best practices, ensuring your network remains resilient and capable of supporting emerging trends and applications.Experience the power of seamless connectivity with our robust networking services.',
    },
    {
        title: 'ROBUST ENERGY AUDITING SERVICES',
        description: ' Energy audit is the first step towards your comprehensive energy management strategy.Consultivo being one of the practicing Energy Audit Companies in India, helps Improving the energy efficiency to meet the dual objectives of promoting sustainable development and of making the economy competitive.',
    },
    {
        title: 'RELIABLE INVERTER SOLUTIONS',
        description: 'We partner with leading inverter manufacturers and utilize cutting-edge technologies to ensure our solutions are energy-efficient, durable, and capable of handling even the most demanding power requirements.Experience uninterrupted power and peace of mind with our reliable inverter solutions. ',
    },
];

export const Services: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledContainer>
            <div className='w-3/4 flex items-start flex-col mb-7'>
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
                        <Tab icon={<GateAutomation />} label="Gate Automation" className='text-sm' />
                        <Tab icon={<IntrusionAlarm />} label="Intrusion Alarm" className='text-sm' />
                        <Tab icon={<AccessControl />} label="Access Control" className='text-sm' />
                        <Tab icon={<NetworkingService />} label="Networking Service" className='text-sm' />
                        <Tab icon={<EnergyAuditing />} label="Energy Auditing" className='text-sm' />
                        <Tab icon={<InverterServices />} label="Inverter Services" className='text-sm' />
                    </Tabs>
                </Box>
                <div className='w-full flex flex-col justify-center mt-5 p-3'>
                    <h2 className={`text-black md:text-lg text-base text-center font-semibold md:font-bold mb-5 ${lato.className} `}>{serviceData[value].title}</h2>
                    <p className={`text-gray-700 md:text-base ${inter.className} md:font-medium font-normal text-sm  `}>{serviceData[value].description}</p>
                </div>
            </StyledTabsContainer>
        </StyledContainer>
    );
};
