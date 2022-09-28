import React from 'react';
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import {
    NavLink,
} from "react-router-dom";

const Home = () => {
  return (
    <Grid>
        <Row justifyContent='center'>
            <Col sm={6}>
                <h1>Widget Generator</h1>
                <div className='tabs'>
                    <NavLink to="/" className={({isActive}) => isActive ? 'tabs__tab tabs__tab--active' : 'tabs__tab'} end>
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
