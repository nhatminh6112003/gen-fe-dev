import type {} from '@/types';
import { api } from '.';
import { sendEmail } from '@/pages/api/mailer';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

interface Query {}

interface Body {
  name: string;
  email: string;
  phone: string;
  message: string;
  question: string;
  locale: string;
}

interface IUser {
  name?: string;
  email?: string;
  note?: string;
  type?: string;
}

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  },
  region: process.env.AWS_SES_REGION,
  sender: 'support@genembryomics.com',
  receiver: 'team@genembryomics.com'
};

const sendEmailToUser = async (user: IUser) => {
  const sesClient = new SESClient(SES_CONFIG);

  let params = {
    Source: SES_CONFIG.sender,
    Destination: {
      ToAddresses: [SES_CONFIG.receiver]
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<div><h2>GEN Email Service:</h2> <br/>
          <h3>User ${user?.name ? 'contact' : 'subscribe'} information: <br/>
            ${user?.name ? `Name: ${user?.name} <br/>` : ''}
            ${user?.note ? `Note: ${user?.note} <br/>` : ''}
            ${user?.type ? `Type: ${user?.type} <br/>` : ''}
            Email: ${user.email} <br/></h3></div>`
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the body of my email!'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Hello Supporter!`
      }
    }
  };

  const sendEmailCommand = new SendEmailCommand(params);
  const res = await sesClient.send(sendEmailCommand);
  return res;
};

export default async function post(body: Body) {
  try {
    const { data }: any = await api.post<Query>(`/contacts`, {
      data: body
    });

    const params = {
      name: body?.name,
      email: body?.email,
      note: body?.message,
      type: body?.question
    };

    const result = await sendEmailToUser(params);

    return { data };
  } catch (error) {
    console.log(error);

    throw new Error(JSON.stringify(error));
  }
}
