"use client"
import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import { TextInput } from '$/components/text-input';
import { Button } from '$/components/button';
import { Form } from '$/components/form';
import { Card } from '$/components/card';
import styles from './page.module.scss'
import { Title } from '$/components/title';
import { Description } from '$/components/description';
import { Checkbox } from 'flowbite-react';

const loginSchema = Yup.object({
    username: Yup.string()
        .min(2, 'Must be at least 2 characters long')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Must be at least 6 characters long')
        .required('Required'),

})

type LoginProps = Yup.InferType<typeof loginSchema>;

const SignupForm = () => {
    const fm = useFormik<LoginProps>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Fragment>
            <div className='w-full min-h-screen p-6'>
                <div className='space-y-6'>
                    <div>
                        <ul className='flex gap-x-6 text-sm'>
                            <li className='text-[#9D9EA1]'>Session Management List <span className='font-medium text-[#242424]'>/</span></li>
                            <li>Session Detail</li>
                        </ul>
                    </div>
                    <h1 className='font-semibold text-4xl text-black leading-[48px]'>Detail Session</h1>

                    <div className='rounded-lg border-l-[4px] border-l-[#4AC3BE] py-3 px-5 relative shadow-md border border-[#D8D9DE]'>
                        <div className='absolute right-5 top-3'>x</div>
                        <div className='flex'>
                            <div className='w-[20px]'>ic</div>
                            <div className='space-y-1 text-sm'>
                                <p className='font-semibold'>History Chat</p>
                                <span className='text-[#545455]'>You can download history chat</span>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button className='text-xs font-semibold text-white py-2 px-6 rounded-full bg-[#4AC3BE]'>Download</button>
                        </div>
                    </div>

                    <div className='rounded-lg p-6 bg-white'>
                        <section>
                            <h2 className='font-semibold text-[18px]'>General Information</h2>
                            <div className='grid grid-cols-2 gap-x-64 mt-6'>
                                <div className='space-y-2.5'>
                                    <div className='flex justify-between'>
                                        <div className='font-medium text-base w-3/6'>Session ID</div>
                                        <div className='font-normal text-base flex-1 leading-[22px]'>: #0002</div>
                                    </div>
                                </div>
                                <div className='space-y-2.5'>
                                    <div className='flex justify-between'>
                                        <div className='font-medium text-base w-3/6'>Session End</div>
                                        <div className='font-normal text-base flex-1 leading-[22px]'>: -</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='grid grid-cols-2 space-x-6'>
                        <div className='bg-white rounded flex flex-row gap-4 p-4'>
                            <div className='w-16 h-16 rounded-3xl bg-primary-50'>.</div>
                            <div className='flex-1 space-y-3'>
                                <div className='grid space-y-1.5'>
                                    <label className='text-sm text-[#9D9EA1]'>Storyteller Name</label>
                                    <span className='text-sm font-medium'>Asuna</span>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <div className='grid space-y-1.5'>
                                        <label className='text-sm text-[#9D9EA1]'>Rating time</label>
                                        <span className='text-sm font-medium'>-</span>
                                    </div>
                                    <div className='grid space-y-1.5'>
                                        <label className='text-sm text-[#9D9EA1]'>Rating from Listener</label>
                                        <span className='text-sm font-medium'>-</span>
                                    </div>
                                    <div className='grid space-y-1.5'>
                                        <label className='text-sm text-[#9D9EA1]'>Additional note</label>
                                        <span className='text-sm font-medium'>-</span>
                                    </div>
                                </div>
                            </div>
                            <div>o</div>
                        </div>
                        <div className='bg-white rounded flex flex-row gap-4 p-4'>
                            <div className='w-16 h-16 rounded-3xl bg-primary-50'>.</div>
                            <div className='flex-1 space-y-3'>
                                <div className='grid space-y-1.5'>
                                    <label className='text-sm text-[#9D9EA1]'>Storyteller Name</label>
                                    <span className='text-sm font-medium'>Asuna</span>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <div className='grid space-y-1.5'>
                                        <label className='text-sm text-[#9D9EA1]'>Rating time</label>
                                        <span className='text-sm font-medium'>-</span>
                                    </div>
                                    <div className='grid space-y-1.5'>
                                        <label className='text-sm text-[#9D9EA1]'>Rating from Listener</label>
                                        <span className='text-sm font-medium'>-</span>
                                    </div>
                                    <div className='grid space-y-1.5'>
                                        <label className='text-sm text-[#9D9EA1]'>Additional note</label>
                                        <span className='text-sm font-medium'>-</span>
                                    </div>
                                </div>
                            </div>
                            <div>o</div>
                        </div>
                    </div>

                    <div className='rounded-lg p-6 bg-white'>
                        <section>
                            <h2 className='font-semibold text-[18px]'>Topic</h2>
                            <div className='flex gap-x-2 hap-y-[14px] mt-6'>
                                <div className='bg-[#FAFAFA] font-normal text-base rounded-[20px] px-2'>Pernikahan</div>
                                <div className='bg-[#FAFAFA] font-normal text-base rounded-[20px] px-2'>Pernikahan</div>
                            </div>
                        </section>
                    </div>

                    <div className="relative overflow-x-auto rounded-lg bg-white">
                        <table className="w-full text-xs text-left">
                            <thead className="bg-white font-semibold border-b border-[#E2E4E9]">
                                <tr>
                                    <th scope="col" className="px-4 py-5">
                                        Extend Count
                                    </th>
                                    <th scope="col" className="px-4 py-5">
                                        Extend Time Choose
                                    </th>
                                    <th scope="col" className="px-4 py-5">
                                        Chat Time Extend
                                    </th>
                                    <th scope="col" className="px-4 py-5">
                                        &nbsp;
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-sm'>
                                <tr className="bg-white border-b border-[#E2E4E9]">
                                    <td className="px-4 py-[22px]">
                                        1
                                    </td>
                                    <td className="px-4 py-[22px]">
                                        1 Jam
                                    </td>
                                    <td className="px-4 py-[22px]">
                                        &nbsp;
                                    </td>
                                    <td className="px-4 py-[22px]">
                                        01/01/2022 - 10:20
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <span className='text-sm text-[#9D9EA1]'>Rows perpage</span>
                        </div>
                        <div>
                            <ul className='flex text-sm'>
                                <li className='bg-primary-50 text-white px-4 py-1.5'>1</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default SignupForm;