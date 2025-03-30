import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
// ,SocialMediaIcons,SocialMediaIcon,
// import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
// import karantwitter from '../../images/karantwitter.jpg';
// import karansocial from '../../images/karansocialpic.png'
import '../../App.css'

const HeroSection = () => {
    return (
        <div id="about" >
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                       
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                    <Img src="/karan-anime.png" alt="hero-image" className='dark' />
                        {/* <Img src="/karan-bg.png" alt="hero-image" className='dark' /> */}
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection;
