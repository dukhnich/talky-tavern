const Collection = class {
    constructor(list = []) {
        if (!(Array.isArray(list))) {
            throw new Error('Invalid argument type exception, array expected')
        }
        this.payload = list;
    }
    getByIndex(index) {
      return this.payload[index];
    }
    add(item) {
        this.payload.push(item);
    }
    getByKey(key, value) {
      return this.payload.find(i => i[key] === value);
    }
    serialize(serializer) {

    }
    deserialize(string, serializer) {
        return serializer.deserialize(string);
    }

}
export default Collection;
