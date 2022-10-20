import { IAppData } from '../@types/interfaces';
import { IoLayersOutline, IoLogoGithub, IoMailOutline } from 'react-icons/io5';

const metadata: IAppData = {
  appName: 'OpenChat',
  developer: 'Kain Nhantumbo',
  version: '0.0.2',
  copyright: 'Copyright &copy; 2022 Kain Nhantumbo',
  license: 'Licensed under Apache 2.0 License',
  contacts: [
    {
      name: 'Github',
      icon: IoLogoGithub,
      url: 'github.com/KainNhantumbo/messenger-app',
    },
    {
      name: 'Portfolio',
      icon: IoLayersOutline,
      url: '"https://portifolio-dev-mu.vercel.app',
    },
    {
      name: 'E-mail',
      icon: IoMailOutline,
      url: 'nhantumbok@gmail.com',
    },
  ],
};

export default metadata;
