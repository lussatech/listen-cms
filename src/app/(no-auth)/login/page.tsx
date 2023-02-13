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
            <div className={styles.container}>
                <Card>
                    <div className={styles.card_wrapper}>
                        <Image src="/img/logo-main.svg" width={0} height={0} alt="logo" />
                        <div className={styles.head_info}>
                            <Title textAlign="center">Log In to Dashboard</Title>
                            <Description type="span" intent="gray">Enter your email and password below</Description>
                        </div>
                        <Form onSubmit={fm.handleSubmit}>
                            <TextInput
                                label="Username"
                                id="username"
                                name="username"
                                type="text"
                                onChange={fm.handleChange}
                                onBlur={fm.handleBlur}
                                value={fm.values.username}
                                error={fm.touched.password && fm.errors.password ? fm.errors.password : undefined}
                            />
                            <TextInput
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                onChange={fm.handleChange}
                                onBlur={fm.handleBlur}
                                value={fm.values.username}
                                error={fm.touched.password && fm.errors.password ? fm.errors.password : undefined}
                            />
                            <Button>Login</Button>
                        </Form>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};

export default SignupForm;