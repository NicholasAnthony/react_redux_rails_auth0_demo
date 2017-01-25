import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import User from 'grommet/components/icons/base/User';
import Edit from 'grommet/components/icons/base/Edit';
import Home from 'grommet/components/icons/base/Home';

export default class AppSidebar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { desktop, splitSwitch } = this.props
    return (
      
      <Sidebar colorIndex='light-2' direction='column' full={true} size="small" >
        
        <Header pad='medium' justify='between'>
          <Title>NYN</Title>
        </Header>
          
        {!desktop && 
          <Button plain={true} onClick={splitSwitch} icon={<CloseIcon />} />
        }

        <Box flex='grow' justify='start'>

          <Menu primary={true}>
            <Anchor icon={<Edit />} animateIcon={true} href='#' target='_blank' path='/' reverse={false} primary={false} disabled={false} />
            <Anchor href='#' className='active'>First</Anchor>
            <Anchor href='#'>Second</Anchor>
            <Anchor href='#'>Third</Anchor>
          </Menu>

          <Menu style={{display: "none"}}>
            <Anchor href="#">Solutions</Anchor>
            <Anchor href="#">Services</Anchor>
            <Anchor href="#">Products</Anchor>
            <Anchor href="#">About Us</Anchor>
            <Anchor href="#">Support</Anchor>
          </Menu>

        </Box>

        <Footer pad='medium'>
          <Button icon={<User />} />
        </Footer>

      </Sidebar>
      
    )
  }
}

// <Layer onClose={this.props.onClose} closer={true} align="left" a11yTitle={'Add Task Form'}></Layer>
