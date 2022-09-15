import React, { useState, useEffect } from 'react';
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import {
    Link,
    NavLink,
} from "react-router-dom";

const Home = () => {
    const [currentTab, setCurrentTab] = useState('sunshine');

  return (
    <Grid>
        <Row justifyContent='center'>
            <Col sm={6}>
                <h1>Widget Generator</h1>
                <div className='tabs'>
                    <NavLink to="/sunshine" className={({isActive}) => isActive ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}>
                        Sunshine
                    </NavLink>
                    <NavLink to="/native" className={({isActive}) => isActive ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}>
                        Native Messaging
                    </NavLink>
                </div>
            </Col>
        </Row>
    </Grid>
  )
}

export default Home;
