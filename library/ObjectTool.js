class ObjectTool {
  /**
   * Get value from object by key path
   *
   * @param {Object} object the object
   * @param {String} keyPath the key path, e.g. 'foo.bar', 'foo.bar.2'
   * @see https://stackoverflow.com/a/44627252
   * @returns Return undefined if not found.
   */
  static valueForKeyPath(object, keyPath) {
    var result = undefined;

    try {
      result = keyPath.split('.').reduce((previous, current) => {
        return previous[current];
      }, object);
    } catch (error) {
      //console.log(error);
    }

    return result;
  }
}

export default ObjectTool;
