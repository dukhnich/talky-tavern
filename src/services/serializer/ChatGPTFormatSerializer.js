import AbstractSerializer from "./AbstractSerializer";

const ChatGPTFormatSerializer = class extends AbstractSerializer{
    serialize(object) {
        // get string "your ${key} is ${value}" for every key except id
        return Object.entries(object || {}).reduce(
            (str, [key, value]) => key === 'id' ? str : `${str}, your ${key} is ${value} `,
            "",
        );
    };

};

export default ChatGPTFormatSerializer;
