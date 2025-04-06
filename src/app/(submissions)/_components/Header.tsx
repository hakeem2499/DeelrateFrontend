
import { createClient } from '@/prismicio';
import React from 'react'
import { NavbarSubmissionPages } from './ui/ClientHeader';



const Header = async () => {
    const client = createClient();
    const settings = await client.getSingle('settings');
    return (
        <NavbarSubmissionPages navItems={settings}/>
    )
}

export default Header