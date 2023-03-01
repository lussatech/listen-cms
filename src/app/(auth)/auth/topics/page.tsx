

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
                    <h1 className='font-semibold text-4xl text-black leading-[48px]'>Topic</h1>
                    <div className='flex space-x-6'>
                        <ul className='w-[277px]'>
                            <li>
                                <button className='bg-[#4AC3BE] rounded font-medium text-sm w-full flex justify-start text-white px-3 py-2.5'>Semua</button>
                            </li>
                            <li>
                                <button className=' text-[#11817C] rounded font-medium text-sm w-full flex justify-start px-3 py-2.5'>Request</button>
                            </li>
                        </ul>
                        <div className='flex-1 space-y-6'>
                            <div className='rounded-lg p-4 bg-white'>
                                <div className='space-y-4'>
                                    <div className='grid grid-cols-3'>
                                        <TextInput
                                            id="hello"
                                            name="serach"
                                            className='text-sm py-2.5 px-4 border border-[#EDEFF3] placeholder:text-[#9D9EA1]'
                                            placeholder='Search'
                                        />
                                    </div>
                                    <div className='flex gap-x-6 text-xs'>
                                        <ul className='flex gap-x-3'>
                                            <li className='font-medium'>Status</li>
                                            <li className='font-normal'><Checkbox /> Active</li>
                                            <li className='font-normal'><Checkbox /> Deactive</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-6 space-x-4 justify-end flex'>
                                    <button className='font-semibold border border-[#4AC3BE] text-[#4AC3BE] px-6 py-2 rounded-full text-sm'>Reset</button>
                                    <button className='font-semibold border bg-[#4AC3BE] px-6 py-2 rounded-full text-white  text-sm'>Apply</button>
                                </div>
                            </div>

                            <div className="relative overflow-x-auto rounded-lg bg-white">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-white font-semibold border-b border-[#E2E4E9]">
                                        <tr>
                                            <th scope="col" className="px-4 py-5">
                                                Topic ID
                                            </th>
                                            <th scope="col" className="px-4 py-5">
                                                Topic Name
                                            </th>
                                            <th scope="col" className="px-4 py-5">
                                                Number of Choose
                                            </th>
                                            <th scope="col" className="px-4 py-5">
                                                Session Time (hh:mm)
                                            </th>
                                            <th scope="col" className="px-4 py-5">
                                                Status
                                            </th>
                                            <th scope="col" className="px-4 py-5">
                                                &nbsp;
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-sm'>
                                        <tr className="bg-white border-b border-[#E2E4E9]">
                                            <td className="px-4 py-[22px]">
                                                #00001
                                            </td>
                                            <td className="px-4 py-[22px]">
                                                Pemilu
                                            </td>
                                            <td className="px-4 py-[22px]">
                                                1000
                                            </td>
                                            <td className="px-4 py-[22px]">
                                                Yes
                                            </td>
                                            <td className="px-4 py-[22px]">
                                                <span className='bg-[#4AC3BE] text-white rounded-full font-medium text-xs px-4 py-0.5'>Aktif</span>
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
                </div>
            </div>
        </Fragment>
    );
};

export default SignupForm;

