import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import CubesIcon from 'grommet/components/icons/base/Cubes';
import ComplianceIcon from 'grommet/components/icons/base/Compliance';
import Header from './Header';
import Cards from './Cards';
import Image from 'grommet/components/Image';
import Marquee from '../../assets/images/subpage/marquee.jpg'
import Section1 from '../../assets/images/subpage/section-1.jpg'
import Section2 from '../../assets/images/subpage/section-2.jpg'




export default class SubPage extends Component {
  render() {
    return (
      <Box>
        <Header />
        <Hero size="large" background={<Image src={Marquee} fit='cover' />} colorIndex="light-1">
          <Card
            heading={
              <Heading strong={true}>
                Accelerate your transformation with the cloud
              </Heading>
            }
            description="HPE can help you benefit now from your right mix of cloud" 
            label="label" 
            size="large"
            link={
              <Anchor href="#" primary={true} label="Learn More" />
            } />
        </Hero>
        <Box align="center" pad={{vertical: "large", between: "small"}}>
          <Box pad={{horizontal: "large"}} align="center" textAlign="center"
            size={{"width": {"max": "xxlarge"}}}>
            <Heading tag="h1" strong={true}>
              Sumo accumsan mel ignota hendrerit.
            </Heading>
            <Paragraph size="xlarge" width="large" margin="none">
              Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
              facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
            </Paragraph>
          </Box>
          <Box size={{width: {max: "xxlarge"}}} direction="row">
            <Box pad="medium" basis="1/2">
              <CubesIcon colorIndex="brand" size="large" />
              <Headline size="small" strong={true} margin="medium">
                Lorem ipsum dolor sit amet
              </Headline>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
                facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
              </Paragraph>
            </Box>
            <Box pad="medium" basis="1/2">
              <ComplianceIcon colorIndex="brand" size="large" />
              <Headline size="small" strong={true} margin="medium">
                Lorem ipsum dolor sit amet
              </Headline>
              <Paragraph margin="none">
                Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae 
                facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Hero size="large" background={<Image src={Section1} fit='cover' />} colorIndex="light-1" 
          justify="start">
          <Card
            heading={
              <Heading strong={true}>
                Accelerate your transformation with the cloud
              </Heading>
            }
            description="HPE can help you benefit now from your right mix of cloud" 
            label="label" 
            size="large"
            link={
              <Anchor href="#" primary={true} label="Learn More" />
            } />
        </Hero>
        <Hero size="large" background={<Image src={Section2} fit='cover' />} colorIndex="light-1">
          <Card
            heading={
              <Heading strong={true}>
                Accelerate your transformation with the cloud
              </Heading>
            }
            description="HPE can help you benefit now from your right mix of cloud" 
            label="label" 
            size="large"
            link={
              <Anchor href="#" primary={true} label="Learn More" />
            } />
        </Hero>
        <Footer colorIndex="light-2" pad={{vertical: "large"}} align="center">
          <Cards />
        </Footer>
      </Box>
    );
  }
};