import { IMessage } from '../@types/interfaces';
import { ChatBoxContainer as Container } from '../styles/components/chat-box';

interface IProps {
  messages: IMessage[]
  
}

export default function ChatBox({}: IProps): JSX.Element {
	return <Container>
<section className='header'>
<div>

</div>
</section>

  </Container>;
}
