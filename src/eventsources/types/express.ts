import { PlainObject } from "@godspeedsystems/core";
import { EventSource } from "@godspeedsystems/plugins-express-as-http";
// You have to install cors package,  `npm install cors`
import cors from 'cors';

class MyEventSource extends EventSource {
  async initClient(): Promise<PlainObject> {
    const client = await super.initClient();

    // adding a cors middleare
    client.use(cors());

    return client;
  }
};

export default MyEventSource;