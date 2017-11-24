import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
    	activeItem: 'home'
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
  	this.setState({ activeItem: name })
  }

  render() {
  	const { activeItem } = this.state
    return (
    	<Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
          <Menu.Item name='github' active={activeItem === 'github'} onClick={this.handleItemClick} />
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    );
  }
}
export default NavMenu;

