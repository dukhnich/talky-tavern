import AbstractSerializer from "./AbstractSerializer";

const JSONSerializer = class extends AbstractSerializer{
    serialize(object) {
        return JSON.stringify(object);
    };
    deserialize(string) {
        return JSON.parse(string);
    };

};

export default JSONSerializer;
