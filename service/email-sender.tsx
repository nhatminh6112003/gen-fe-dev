import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  },
  region: 'ap-southeast-2',
  sender: process.env.AWS_SES_SENDER || '',
  receiver: process.env.AWS_SES_RECEIVER || ''
};

const sesClient = new SESClient(SES_CONFIG);

interface IUser {
  name?: string;
  email?: string;
  note?: string;
  type?: string;
}

export const sendEmail = async (user: IUser) => {
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
