class CallerTool {
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
}

export default CallerTool;