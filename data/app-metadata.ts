import { IAppData } from '../@types/interfaces';
import { IoLayers, IoLogoGithub, IoMail } from 'react-icons/io5';

const metadata: IAppData = {
  appName: 'OpenChat Messenger',
  developer: 'Kain Nhantumbo',
  version: '0.2.0',
  copyright: '2022 Kain Nhantumbo',
  license: 'Licensed under Apache 2.0 License',
  contacts: [
    {
      name: 'Github',
      icon: IoLogoGithub,
      url: 'https://github.com/KainNhantumbo/messenger-app',
    },
    {
      name: 'Portfolio',
      icon: IoLayers,
      url: 'https://portifolio-dev-mu.vercel.app',
    },
    {
      name: 'E-mail',
      icon: IoMail,
      url: 'nhantumbok@gmail.com',
    },
  ],
};

export default metadata;
