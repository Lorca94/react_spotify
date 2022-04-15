import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position:fixed;
    bottom: 0;
    height: 70px;
    width: 100vw;
    background-color: #181818;
    color: #fff;
`;

const FooterLeft = styled.div`
    flex: 0.3;
    display:flex;
    align-items: center;
    max-width: 300px;
    & img{
        width:70px;
        height:70px;
        margin-right: 20px;
        object-fit:contain;
    }
`;

const FooterCenter = styled.div`
    flex: 0.4;
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width:150px;
    & svg {
        width: 38px;
        height: 38px;
    }
`;

const FooterRight = styled.div`
    flex: 0.2;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
    & .MuiSlider-root{
        color: #1ed760;
        width: 90%;
    }
`;

export {
 FooterContainer, FooterLeft, FooterRight, FooterCenter,
};
