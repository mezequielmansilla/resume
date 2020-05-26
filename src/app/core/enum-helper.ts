export class EnumHelper {
  static getValues(object): string[] {
    const objectArray = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        objectArray.push(object[key]);
      }
    }
    return objectArray;
  }
}
