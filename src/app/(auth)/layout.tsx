"use client"
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProSidebarProvider>
            {children}
        </ProSidebarProvider>
    )
}
