import variables from 'modules/variables';
import { Close, Delete } from '@mui/icons-material';
import { setDefaultSettings } from 'modules/helpers/settings';

export default function ResetModal({ modalClose }) {
  const reset = () => {
    variables.stats.postEvent('setting', 'Reset');
    setDefaultSettings('reset');
    window.location.reload();
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{variables.language.getMessage(variables.languagecode, 'modals.main.settings.sections.advanced.reset_modal.title')}</h1>
      <span>{variables.language.getMessage(variables.languagecode, 'modals.main.settings.sections.advanced.reset_modal.question')}</span>
      <br/><br/>
      <span>{variables.language.getMessage(variables.languagecode, 'modals.main.settings.sections.advanced.reset_modal.information')}</span>
      <div className='resetfooter'>
        <button className='round reset' style={{ marginLeft: 0 }} onClick={() => reset()}>
          <Delete/>
        </button>
        <button className='round add' style={{ marginLeft: '5px' }} onClick={modalClose}>
          <Close/>
        </button>
      </div>
    </>
  );
}
