"use client"
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { UserIcon, TreeIcon, ClockIcon, CogIcon, ArrowLeftIcon } from '$/components/icon';
import Image from 'next/image';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { collapseSidebar, collapsed } = useProSidebar();
    return (
        <div>
            <div style={{ display: 'flex', height: '100%' }}>
                <Sidebar
                    backgroundColor='#4AC3BE'
                    width='210px'
                    className='min-h-screen'
                >
                    <div className='h-[100px] grid justify-center content-center'>
                        {collapsed ? <Image src="/img/logo-mini.svg" width={0} height={0} className='invert-[1] brightness-0 w-full' alt="logo" /> : <Image src="/img/logo-white.svg" width={0} height={0} className='invert-[1] brightness-0 w-full' alt="logo" />}
                    </div>
                    <Menu menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? '#f5d9ff' : '#d359ff',
                                    backgroundColor: active ? '#eecef9' : undefined,
                                };
                        },
                    }}>
                        <MenuItem
                            icon={<UserIcon />}
                        > User</MenuItem>

                        <MenuItem
                            icon={<TreeIcon />}
                        > Topik</MenuItem>

                        <MenuItem
                            icon={<ClockIcon />}
                        > Session</MenuItem>
                        <MenuItem
                            icon={<CogIcon />}
                        > Setting</MenuItem>
                    </Menu>
                </Sidebar>
                <main className='w-full'>
                    <nav className='bg-white w-full h-16 relative'>
                        <button className='bg-white border border-gray-100 h-8 w-8 top-3.5 -left-3.5 z-[9] rounded-full shadow-md absolute flex justify-center items-center' onClick={() => collapseSidebar()}>
                            <ArrowLeftIcon />
                        </button>
                    </nav>
                    <section className='bg-[#f7f8fc]'>
                        {children}
                    </section>
                </main>
            </div>
        </div >
    )
}
