"use client"
import React, { Fragment } from 'react';
import { Button } from '$/components/button';
import { Card } from '$/components/card';
import styles from './page.module.scss'
import { Title } from '$/components/title';
import { Description } from '$/components/description';
import { TimesIcon } from '$/components/icon';


const NotFound = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <Card rounded="medium">
                    <div className={styles.card_wrapper}>
                        <div className='grid justify-center content-center'>
                            <TimesIcon />
                        </div>
                        <div className={styles.head_info}>
                            <Title textAlign="center">404</Title>
                            <Title textAlign="center">Page Not Found</Title>
                            <div>
                                <Description
                                    type="span"
                                    intent="gray"
                                >The page you are looking for not available</Description>
                            </div>
                        </div>
                        <Button>Ok</Button>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};

export default NotFound;