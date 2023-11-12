import AbstractSerializer from "./AbstractSerializer";

const JSONSerializer = class extends AbstractSerializer{
    serialize(object) {
        return JSON.stringify(object);
    };

};

export default JSONSerializer;
