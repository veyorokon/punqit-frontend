/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Box, Flex, TabHeaders} from "components";
import styled, {css} from "styled-components";

const Menu = styled(Flex)`
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.10196);

  z-index: 10;
`;

const PanelNavigation = styled(Flex)`
  width: 100%;
  height: 100%;
  color: black;
`;

const NavigationItem = styled(Flex)`
  cursor: pointer;
  transition: all 0.3s ease-out;
  outline: none;
  ${props =>
    props.active &&
    css`
      background: white;
      color: black;
      font-weight: 600;
    `}
`;

const OptionHeader = styled(Box)`
  font-size: 2.4rem;
  text-align: center;
  color: white;
  font-weight: 400;
  line-height: 1.5;
`;

const Hide = styled(Box)`
  transition: visibility 0s, opacity 0.8s ease-in-out;
  visibility: hidden;
  height: 0;
  opacity: 0;
  ${props =>
    props.display &&
    css`
      height: initial;
      opacity: 1;
      visibility: visible;
    `}
`;

const TabPanel = props => {
  return (
    <Box h="100%" margin={"0 auto"} {...props}>
      {props.children}
    </Box>
  );
};

class NavigationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    };
  }

  getInitialState() {
    return {
      selected: this.props.selected || 0
    };
  }

  handleChange = index => {
    this.setState({selected: index});
  };

  render() {
    const {selected} = this.state;
    return (
      <React.Fragment>
        <TabHeaders {...this.props}>
          <PanelNavigation bg={"greys.2"}>
            {this.props.tabHeaders &&
              this.props.tabHeaders.map((elem, index) => (
                <NavigationItem
                  p={2}
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                  onClick={() => this.handleChange(index)}
                  color={"blacks.0"}
                  key={index}
                  active={selected === index}
                >
                  {elem}
                </NavigationItem>
              ))}
          </PanelNavigation>
        </TabHeaders>
        {this.props.children.map((elem, index) => (
          <Hide key={index} display={selected === index}>
            {elem}
          </Hide>
        ))}
      </React.Fragment>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <Box m="auto" w="fit-content" p={2}>
        <Menu
          height={"50rem"}
          width={"50rem"}
          bg={"whites.0"}
          color={"blacks.0"}
          m={2}
          borderRadius={"2px"}
          flexDirection="column"
        >
          <NavigationTabs
            width={"100%"}
            height={"4.3rem"}
            fs={"1.8rem"}
            selected={0}
            tabHeaders={["Login", "Sign up", "Test"]}
          >
            <TabPanel p={2} w="100%">
              <OptionHeader margin={"1rem auto 1rem"} bg={"oranges.0"}>
                Login
              </OptionHeader>
              Login
            </TabPanel>
            <TabPanel p={2} w="100%">
              <OptionHeader margin={"1rem auto 1rem"} bg={"oranges.0"}>
                Sign up
              </OptionHeader>
              Sign up
            </TabPanel>
            <TabPanel p={2} w="100%">
              <OptionHeader margin={"1rem auto 1rem"} bg={"oranges.0"}>
                Test
              </OptionHeader>
              Test
            </TabPanel>
          </NavigationTabs>
        </Menu>
      </Box>
    );
  }
}

export default Sidebar;
