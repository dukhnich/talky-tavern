import AbstractSerializer from "./AbstractSerializer";
import Character from "../../model/Character";
import Collection from "../../model/Collection";

const JSONSerializerUpgraded = class extends AbstractSerializer{
    constructor() {
        super();
        this.mapping = {
            character: Character,
            collection: Collection,
        };
    }
    serialize(object) {
        if (typeof object === 'object') {
            let typeKey;
            Object.entries(this.mapping).every(([key, value]) => {
                if (object instanceof value) {
                    typeKey = key;
                }
                return !Boolean(typeKey);
            });
            return JSON.stringify({
                type: typeKey,
                value: object,
            })
        }
        return JSON.stringify(object);
    };
    deserialize(string) {
        return JSON.parse(string);
    };

};

export default JSONSerializerUpgraded;
