import styled from 'styled-components';

const BodyContainer = styled.div`
    flex: 0.8;
    background: linear-gradient(to top, #000000 , #053a17);
`;
const InfoContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;
const Info = styled.div`
    background-color: rgba(200,200,200,.1);
    margin:40px 40px;
    border-radius: 25px;
    & img{
        width:15vw;
        margin:20px 40px;
        box-shadow: 0 4px 60px #000;
    }
    :hover{
        background-color: rgba(255,255,255,.2);
        transition: 300ms;
    }
`;

const InfoText = styled.div`
    text-align: center;
    margin: 20px 0px;
    color: #fff;

`;
const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 35px;
    padding: 15px;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items:center;
    min-width:75px;
    background-color: #fff;
    color: #181818;
    border-radius: 30px;
    padding: 10px;
    & input{
        border:none;
        width: 100%;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items:center;
    border-radius: 30px;
    background-color: #000;
    & h4 {
        margin: 0 15px;
        color: gray;
    }
`;

export {
 BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Info,
 InfoContainer, InfoText,
};
