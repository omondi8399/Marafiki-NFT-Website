import React from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const Item = styled.div`
width: calc(20rem -4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
`

const ImageContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};

border-radius: 20px;
cursor-pointer;

img{
  width: 100%;
  height: auto;
}
`


const MemberComponent = ({img, name=" ",position=" "}) => {
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
    </Item>
  )
}



const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name='Mbogi' position='founder' />
        <MemberComponent img={img2} name='Mbogi' position='founder' />
        <MemberComponent img={img3} name='Mbogi' position='founder' />
        <MemberComponent img={img4} name='Mbogi' position='founder' />
        <MemberComponent img={img5} name='Mbogi' position='founder' />
        <MemberComponent img={img6} name='Mbogi' position='founder' />
        <MemberComponent img={img7} name='Mbogi' position='founder' />
        <MemberComponent img={img8} name='Mbogi' position='founder' />
        <MemberComponent img={img9} name='Mbogi' position='founder' />
        <MemberComponent img={img10} name='Mbogi' position='founder' />
      </Container>
    </Section>
  )
}

export default Team