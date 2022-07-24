import type { NextPage } from 'next';
import Link from 'next/link';
import PageSectionContainer from '../components/PageSectionContainer';

const contact: NextPage = () => {
  return (
    <PageSectionContainer>
      <h1>👋 You can contact me at:</h1>
      <ul>
        <li>
          <Link href='mailto:ehrlich.christopher@gmail.com'>
            <a>Email</a>
          </Link>
        </li>
        <li>
          <Link href='https://github.com/c-ehrlich'>
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href='https://discordapp.com/channels/@me/190543707592720384'>
            Discord (cje#1138)
          </Link>
        </li>
      </ul>
    </PageSectionContainer>
  );
};

export default contact;
