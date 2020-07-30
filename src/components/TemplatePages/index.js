import React from 'react'; 
import styled from 'styled-components';
import '../../index.css';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: #000000;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

const TemplatePages = ( { children }) => {
    return(
        <>
            <Main>
                <Menu />
                    { children }
                <Footer />
            </Main>
        </>

    );
}

export default TemplatePages;