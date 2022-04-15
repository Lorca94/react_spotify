import styled from 'styled-components';

const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: #000;
    min-width:240px;
    color: #fff;
    & img{
        height: 70px;
        padding: 10px;
        margin: auto;
    }

    & hr{
        border: 1px solid smokegray;
        width: 90%;
        margin: 10px auto;
    }
`;

const Playlists = styled.div`
    padding: 0px, 10px;
`;

const Choices = styled.div`
    display:flex;
    align-items: center;
    color: gray;
    height: 40px;
    cursor: pointer;
    &:hover{
        color: #fff;
        transition: 300ms color ease-in;
    }
    & h6, p, svg{
        margin: 10px;
        padding: 0 5px;
    }

`;

export { SidebarContainer, Playlists, Choices };
