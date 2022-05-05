class PatternTool {
    /**
     *
     * @param {String} string
     * @param {String} markerStart
     * @param {String} markerEnd
     * @param {Boolean} includeMarker
     *
     * @returns {Array[String]}
     *
     * @see https://stackoverflow.com/a/37207892
     */
    static captureBalancedMarkedString(string, markerStart, markerEnd, includeMarker = false) {
        if (typeof string != 'string' || typeof markerStart != 'string' || typeof markerEnd != 'string') {
            return null;
        }

        let balancedStrings = [];
        let balanceLevel = 0;
        let balanceGroupStart = -1;
        let index = 0;
        for (const char of string) {
            if (char === markerStart) {
                balanceLevel++;
                if (balanceLevel == 1) {
                    balanceGroupStart = (includeMarker ? index : index + 1);
                }
            }
            else if (char === markerEnd) {
                if (balanceLevel == 1) {
                    // Note: the range of substring is [start, end)
                    let balancedString = string.substring(balanceGroupStart, (includeMarker ? index + 1 : index));
                    balancedStrings.push(balancedString);
                }
                // Note: if markerEnd more than markerStart, just ignore it and not change balanceLevel to negative
                if (balanceLevel > 0) {
                    balanceLevel--;
                }
            }

            index++;
        }

        return balancedStrings
    }
}

export default PatternTool;
