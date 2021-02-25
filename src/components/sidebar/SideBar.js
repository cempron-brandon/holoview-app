import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';

import {HOLOLIVE_GROUP,CHANNEL_ID,CHANNEL_NAME} from '../../utils/constants';

export default function SideBar() {
  return (
    <Menu borderless vertical stackable fixed='left' className='side-nav'>
      <SideBarItem path='/' label='Home' />
      <Divider/>
      <SideBarHeader title={HOLOLIVE_GROUP.EN_GEN_1}/>
      <SideBarItem path={`/channel/${CHANNEL_ID.MORI_CALLIOPE}`} label={CHANNEL_NAME.MORI_CALLIOPE} icon="home"/>
      <SideBarItem path={`/channel/${CHANNEL_ID.TAKANASHI_KIARA}`} label={CHANNEL_NAME.TAKANASHI_KIARA} />
      <SideBarItem path={`/channel/${CHANNEL_ID.NINOMAE_INANIS}`} label={CHANNEL_NAME.NINOMAE_INANIS} />
      <SideBarItem path={`/channel/${CHANNEL_ID.GAWR_GURA}`} label={CHANNEL_NAME.GAWR_GURA} />
      <SideBarItem path={`/channel/${CHANNEL_ID.WATSON_AMELIA}`} label={CHANNEL_NAME.WATSON_AMELIA} />
      <Divider/>
      <SideBarHeader title={HOLOLIVE_GROUP.JP_GEN_0}/>
      <SideBarItem path={`/channel/${CHANNEL_ID.TOKINO_SORA}`} label={CHANNEL_NAME.TOKINO_SORA} />
      <SideBarItem path={`/channel/${CHANNEL_ID.ROBOCO}`} label={CHANNEL_NAME.ROBOCO} />
      <SideBarItem path={`/channel/${CHANNEL_ID.SAKURA_MIKO}`} label={CHANNEL_NAME.SAKURA_MIKO} />
      <SideBarItem path={`/channel/${CHANNEL_ID.HOSHIMACHI_SUISEI}`} label={CHANNEL_NAME.HOSHIMACHI_SUISEI} />
      <SideBarItem path={`/channel/${CHANNEL_ID.AZKI}`} label={CHANNEL_NAME.AZKI} />
      {/* <Divider/>
      <SideBarHeader title='HoloJP Gen 1'/>
      <SideBarItem path={`/channel/${CHANNEL_ID.SHIRAKAMI_FUBUKI}`} label='Fubuki Shirakami' /> */}
    </Menu>
  );
}