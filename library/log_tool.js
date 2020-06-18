class LogTool {
    /**
     * Info[NoColor]
     *
     * @param message
     */
    static i = (message) => {
        console.log(message);
    }

    /**
     * Verbose[Blue]
     *
     * @param message
     */
    static v = (message) => {
        console.log(`%c${message}`, 'color: #157EFB');
    }

    /**
     * Debug[Cyan]
     *
     * @param message
     */
    static d = (message) => {
        console.log(`%c${message}`, 'color: #60C9F8');
    }

    /**
     * Warning[Yellow]
     *
     * @param message
     */
    static w = (message) => {
        console.log(`%c${message}`, 'color: #FECB2F');
    }

    /**
     * Error[Red]
     *
     * @param message
     */
    static e = (message) => {
        console.log(`%c${message}`, 'color: #D50921');
    }

    /**
     * Timing[Magenta]
     *
     * @param message
     */
    static t = (message) => {
        console.log(`%c${message}`, 'color: #FD6684');
    }
}

export default LogTool;
