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
    avatar: 'https://i.imgur.com/HyzX9nH.png',
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
            _id: 4,
            text: `Produto pedido: "Samsung Galaxy A10"
Confirma ?`,
            quickReplies: {
                type: 'radio', // or 'checkbox',
                keepIt: true,
                values: [
                    {
                        title: 'Sim',
                        value: 'sim',
                    },
                    {
                        title: 'Não',
                        value: 'nao',
                    },
                ],
            },
            createdAt: new Date(),
            user: ericaAssistent,
        },
        // {
        //     _id: 2,
        //     text: 'Gostaria de um biscoito de chocolate',
        //     createdAt: new Date(),
        //     user: client,
        // },
        // {
        //     _id: 3,
        //     text: 'Produtos disponíveis:',
        //     quickReplies: {
        //         type: 'radio', // or 'checkbox',
        //         keepIt: true,
        //         values: [
        //             {
        //                 title: 'Wafer Aymoré',
        //                 value: 'wafer-aymore',
        //             },
        //             {
        //                 title: 'Danix',
        //                 value: 'danix',
        //             },
        //             {
        //                 title: 'Rosquinhas Vilma',
        //                 value: 'rosquinhas-vilma',
        //             },
        //             {
        //                 title: 'Teens',
        //                 value: 'teens',
        //             },
        //         ],
        //     },
        //     createdAt: new Date(),
        //     user: ericaAssistent,
        // },
    ]);

    const addMessages = (newMessages = []) => {
        console.log(newMessages);
        setMessages([...messages, ...newMessages]);
        GiftedChat.append(messages, newMessages);
    };

    const onSend = (newMessages = []) => {
        addMessages(newMessages);
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={onSend}
            inverted={false}
            onQuickReply={quickReplies => {
                const message = quickReplies[0];

                if (message.messageId === 4 && message.value === 'sim') {
                    addMessages([
                        {
                            _id: messages.length + 1,
                            createdAt: new Date(),
                            text:
                                'Compra finalizada! Agradecemos a preferência!',
                            user: ericaAssistent,
                        },
                    ]);
                }
            }}
            placeholder="O que deseja ?"
            user={{
                _id: 1,
            }}
        />
    );
}
