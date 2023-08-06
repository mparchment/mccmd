import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
    margin: 0 auto;
`;

const CellName = styled.h2`
    align-self: center;
    margin-bottom: 0;
`

const CellPosition = styled.h3`
    align-self: center;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
`

const Portrait = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    margin-bottom: 25px;
`;

const CellBio = styled.p`

`

function BoardCell({ name, portrait, position, bio}){
    return (
        <Cell>
            <Portrait src={portrait}/>
            <CellName>{name}</CellName>
            <CellPosition>{position}</CellPosition>
            <CellBio>{bio}</CellBio>
        </Cell>
    )
}

BoardCell.propTypes = {
    name: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
}

export default BoardCell