import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

const client = {
    _id: 1,
    name: 'Cliente',
    avatar: 'https://placeimg.com/140/140/any',
};

const ericaAssistent = {
    _id: 2,
    name: 'Erica',
    avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/45/2c/4f/452c4f57-2a57-4909-fd51-602b45a96c5d/source/256x256bb.jpg',
};

export default function EricaBot() {
    const [messages, setMessages] = useState([
        {
            _id: 1,
            text:
                'Olá eu sou a Érica, sua assistente virtual, estou aqui para lhe ajudar, mas ainda estou em fase de aprendizado',
            createdAt: new Date(),
            user: ericaAssistent,
        },
        {
            _id: 2,
            text: 'Gostaria de um biscoito de chocolate',
            createdAt: new Date(),
            user: client,
        },
        {
            _id: 3,
            text: 'Produtos disponíveis:',
            quickReplies: {
                type: 'radio', // or 'checkbox',
                keepIt: true,
                values: [
                    {
                        title: 'Wafer Aymoré',
                        value: 'wafer-aymore',
                    },
                    {
                        title: 'Danix',
                        value: 'danix',
                    },
                    {
                        title: 'Rosquinhas Vilma',
                        value: 'rosquinhas-vilma',
                    },
                    {
                        title: 'Teens',
                        value: 'teens',
                    },
                ],
            },
            createdAt: new Date(),
            user: ericaAssistent,
        },
    ]);

    const onSend = (newMessages = []) => {
        console.log(newMessages);
        setMessages([...messages, ...newMessages]);
        GiftedChat.append(messages, newMessages);
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={onSend}
            inverted={false}
            placeholder="O que deseja ?"
            user={{
                _id: 1,
            }}
        />
    );
}
