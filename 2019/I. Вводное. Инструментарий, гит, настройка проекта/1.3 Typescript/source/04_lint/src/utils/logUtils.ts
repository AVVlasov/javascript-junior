import { TMessage, MESSAGE_TYPE } from '../model';

/**
 * Логирует цветное сообщение в консоль.
 *
 * @param {TMessage} message Сообщение.
 * @param {MESSAGE_TYPE} type Тип сообщения. 
 */
export const logger = (message: TMessage, type: MESSAGE_TYPE = MESSAGE_TYPE.SUCCESS): void => {
    console.info(`%c ${message}`, `
        color: ${type};
        font-size: 25px;
    `);
};
