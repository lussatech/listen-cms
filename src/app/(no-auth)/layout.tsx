"use client"
import React from 'react'
import { RecoilRoot } from "recoil"

const AuthLayout = (props: any) => {
    return (
        <RecoilRoot>{props.children}</RecoilRoot>
    )
}

export default AuthLayout
