import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 275px;
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

const PortraitWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  align-self: center;
`;

const PortraitImage = styled.img`
  object-fit: cover; 
  width: 100%;
  height: 100%;
`;

const CellBio = styled.p`
    text-align: center;
`

function BoardCell({ name, portrait, position, bio}){
    return (
        <Cell>
            <PortraitWrapper><PortraitImage src={portrait}/></PortraitWrapper>
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