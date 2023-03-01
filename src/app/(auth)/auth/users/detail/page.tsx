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
                            <li className='text-[#9D9EA1]'>User Management List <span className='font-medium text-[#242424]'>/</span></li>
                            <li>User Detail</li>
                        </ul>
                    </div>
                    <h1 className='font-semibold text-4xl text-black leading-[48px]'>User Detail</h1>

                    <div className='rounded-lg p-6 bg-white'>
                        <section>
                            <h2 className='font-semibold text-[18px]'>User Information</h2>
                            <div className='grid grid-cols-2 gap-x-64 mt-6'>
                                <div className='space-y-2.5'>
                                    <div className='flex justify-between'>
                                        <div className='font-medium text-base w-3/6'>User ID</div>
                                        <div className='font-normal text-base flex-1 leading-[22px]'>: #0002</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='font-medium text-base w-3/6'>User ID</div>
                                        <div className='font-normal text-base flex-1 leading-[22px]'>: Letong Sanjaya Ndablek</div>
                                    </div>
                                </div>
                                <div className='space-y-2.5'>
                                    <div className='flex justify-between'>
                                        <div className='font-medium text-base w-3/6'>User ID</div>
                                        <div className='font-normal text-base flex-1 leading-[22px]'>: #0002</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='font-medium text-base w-3/6'>User ID</div>
                                        <div className='font-normal text-base flex-1 leading-[22px]'>: Letong Sanjaya Ndablek</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='rounded-lg p-6 bg-white'>
                        <section>
                            <h2 className='font-semibold text-[18px]'>Topic Preferences</h2>
                            <div className='flex gap-x-2 hap-y-[14px] mt-6'>
                                <div className='bg-[#FAFAFA] font-normal text-base rounded-[20px] px-2'>Pernikahan</div>
                                <div className='bg-[#FAFAFA] font-normal text-base rounded-[20px] px-2'>Pernikahan</div>
                            </div>
                        </section>
                    </div>

                    <div className='rounded-lg p-6 bg-white'>
                        <section>
                            <h2 className='font-semibold text-[18px]'>Session</h2>
                            <div className='mt-6 space-y-6'>
                                <div className='flex'>
                                    <button className='px-4 py-3 bg-[#E2E4E9] border border-[#D8D9DE] rounded-l-lg text-base font-medium'>As Story Teller</button>
                                    <button className='px-4 py-3 bg-white border border-[#D8D9DE] rounded-r-lg text-base font-medium'>As Listener</button>
                                </div>

                                <div className='grid grid-cols-4 gap-x-4'>
                                    <div className='p-3 border border-[#D8D9DE] rounded-lg'>
                                        <h3 className='text-sm font-medium'>Not Recommended</h3>
                                        <div className='block mt-3 text-sm'>
                                            <p className='text-[#9D9EA1]'>Total</p>
                                            <p className='mt-1.5'>10 <span className='text-[#9D9EA1]'>dari</span> 80 User</p>
                                        </div>
                                    </div>
                                    <div className='p-3 border border-[#D8D9DE] rounded-lg'>
                                        <h3 className='text-sm font-medium'>Like It</h3>
                                        <div className='block mt-3 text-sm'>
                                            <p className='text-[#9D9EA1]'>Total</p>
                                            <p className='mt-1.5'>10 <span className='text-[#9D9EA1]'>dari</span> 80 User</p>
                                        </div>
                                    </div>
                                    <div className='p-3 border border-[#D8D9DE] rounded-lg'>
                                        <h3 className='text-sm font-medium'>Love It</h3>
                                        <div className='block mt-3 text-sm'>
                                            <p className='text-[#9D9EA1]'>Total</p>
                                            <p className='mt-1.5'>10 <span className='text-[#9D9EA1]'>dari</span> 80 User</p>
                                        </div>
                                    </div>
                                    <div className='p-3 border border-[#D8D9DE] rounded-lg'>
                                        <h3 className='text-sm font-medium'>Not Rated</h3>
                                        <div className='block mt-3 text-sm'>
                                            <p className='text-[#9D9EA1]'>Total</p>
                                            <p className='mt-1.5'>10 <span className='text-[#9D9EA1]'>dari</span> 80 User</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-spacing-1' />
                                <h4 className='font-semibold text-[18px]'>Persona that given from user</h4>
                                <div className='flex gap-x-3 hap-y-[14px] mt-6'>
                                    <div className='p-4 bg-white border border-[#D8D9DE] rounded-full text-base'>Pernikahan</div>
                                    <div className='p-4 bg-white border border-[#D8D9DE] rounded-full text-base space-x-2.5'>
                                        <span>Pernikahan</span>
                                        <span className='px-1.5 py-1 bg-[#4AC3BE] rounded-xl'>+41</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default SignupForm;