const AbstractSerializer = class {
    serialize(object) {
        throw new Error('This serializer meant never to be run');
    };
    deserialize(string) {
        throw new Error('This deserializer meant never to be run');
    };

};

export default AbstractSerializer;
