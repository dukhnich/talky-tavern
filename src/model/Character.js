const Character = class {
    constructor({id, name, race, sex, age, charClass, background, alignment}) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.sex = sex;
        this.age = age;
        this.charClass = charClass;
        this.background = background;
        this.alignment = alignment;
    }
    serialize(serializer) {
        return serializer.serialize({
            'id' : this.id,
            'name' : this.name,
            'race' : this.race,
            'sex' : this.sex,
            'age' : this.age,
            'charClass' : this.charClass,
            'background' : this.background,
            'alignment' : this.alignment,
        });
    }
    deserialize(string, serializer) {
        return serializer.deserialize(string);
    }

}
export default Character;
