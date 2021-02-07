import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AppGatewayyyyyyyyyyyyyyyyy');
  @WebSocketServer() ws: Server;

  afterInit(server: any): any {
    this.logger.log('Start socket gateway');
  }

  handleConnection(client: any, ...args): any {
    this.logger.log('Client connected ' + client.id);
  }

  handleDisconnect(client: any): any {
    this.logger.log('Client disconnected ' + client.id);
  }

  @SubscribeMessage('notif')
  handleEvent(@MessageBody() data: string): string {
    console.log(data);
    this.ws.emit('notif', data);
    return data;
  }
}
