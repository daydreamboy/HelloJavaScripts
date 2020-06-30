class DebugTool {
    /**
     * Get current function name
     *
     * @returns {string}
     * @see https://stackoverflow.com/a/41621478
     * @discussion This method support strict mode
     */
    static currentFunctionName = () => {
        // gets the text between whitespace for second part of stacktrace
        return (new Error()).stack.match(/at (\S+)/g)[1].slice(3);
    }

    /**
     * Get variable name
     *
     * @param obj Required format {obj}
     * @returns {string}
     *
     * @example
     *  DebugTool.variableName({this_is_a_var})
     * @see https://medium.com/@migcoder/reflection-get-variable-name-in-javascript-64ed595701eb
     */
    static variableName = obj => Object.keys(obj)[0];

    /**
     * Dump a variable info
     *
     * @param obj the {x} format
     * @param print If print to console.log. Default is true.
     * @returns {string} the debug info string
     *
     * @see https://stackoverflow.com/questions/46217853/get-constructor-name-of-object
     */
    static dump = (obj, print=true) => {
        let value = Object.values(obj)[0];
        let stringifiedValue = value;
        let constructorString = undefined;

        // Note: symbol object must use toString function to convert to string
        if (typeof value === 'symbol') {
            stringifiedValue = value.toString();
        }
        else if (typeof value === 'object') {
            try {
                stringifiedValue = JSON.stringify(value);
            }
            catch (e) {
                console.log('111');
                console.log(e);
            }
        }

        if (typeof value === 'undefined') {
            constructorString = 'undefined';
        }
        else if (value === null) {
            constructorString = 'undefined';
        }
        else {
            constructorString = value.constructor.name;
        }

        let debugString = `${Object.keys(obj)[0]} = (${typeof value})[${constructorString}] \`${stringifiedValue}\``;
        if (print) {
            console.log(debugString);
        }

        return debugString;
    }
}

export default DebugTool;