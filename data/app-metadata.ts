import Package from '../package.json'
import { IAppData } from '../@types/interfaces';
import { IoLayers, IoLogoGithub, IoMail } from 'react-icons/io5';

const metadata: IAppData = {
  appName: Package.name,
  developer: Package.author.name,
  version: Package.version,
  copyright: Package.copyright,
  license: Package.license,
  contacts: [
    {
      name: 'Github',
      icon: IoLogoGithub,
      url: Package.author.github,
    },
    {
      name: 'Portfolio',
      icon: IoLayers,
      url: Package.author.portfolio,
    },
    {
      name: 'E-mail',
      icon: IoMail,
      url: Package.author.email,
    },
  ],
};

export default metadata;
