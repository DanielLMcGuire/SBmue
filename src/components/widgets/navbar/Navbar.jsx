import { PureComponent, createRef } from 'react';
import { RefreshRounded, SettingsRounded, AssignmentRounded as NotesRounded, SmsFailed as Report } from '@material-ui/icons';

import Notes from './Notes';
import Maximise from '../background/Maximise';
import Favourite from '../background/Favourite';
import Tooltip from '../../helpers/tooltip/Tooltip';

import EventBus from '../../../modules/helpers/eventbus';

import './scss/index.scss';

export default class Navbar extends PureComponent {
  constructor() {
    super();
    this.navbarContainer = createRef();
  }

  setZoom() {
    const zoomNavbar = Number((localStorage.getItem('zoomNavbar') || 100) / 100);
    this.navbarContainer.current.style.fontSize = `${zoomNavbar}em`;
  }

  componentDidMount() {
    EventBus.on('refresh', (data) => {
      if (data === 'navbar' || data === 'background') {
        this.forceUpdate();
        this.setZoom();
      }
    });

    this.setZoom();
  }

  render() {
    const backgroundEnabled = (localStorage.getItem('background') === 'true');
  
    return (
      <div className='navbar-container' ref={this.navbarContainer}>
        {(localStorage.getItem('view') === 'true' && backgroundEnabled) ? <Maximise/> : null}
        {(localStorage.getItem('favouriteEnabled') === 'true' && backgroundEnabled) ? <Favourite/> : null}
    
        {(localStorage.getItem('notesEnabled') === 'true') ?
          <div className='notes'>
            <NotesRounded className='topicons'/>
            <Notes/>
          </div>
        : null}
  
        {(window.constants.BETA_VERSION === true) ? 
          <Tooltip title={window.language.widgets.navbar.tooltips.feedback}>
            <Report className='topicons' onClick={() => this.props.openModal('feedbackModal')}/>
          </Tooltip>
        : null}
  
        {(localStorage.getItem('refresh') === 'true') ?
          <Tooltip title={window.language.widgets.navbar.tooltips.refresh}>
            <RefreshRounded className='refreshicon topicons' onClick={() => window.location.reload()}/>
          </Tooltip>
        : null}
  
        <Tooltip title={window.language.modals.main.navbar.settings}>
          <SettingsRounded className='settings-icon topicons' onClick={() => this.props.openModal('mainModal')}/>
        </Tooltip>
      </div>
    );
  }
}
