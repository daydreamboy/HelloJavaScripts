// Note: dump object for more information
Object.prototype.dump = function (full_path = false) {

    var e = new Error('Could not parse input');
    try { throw e } catch (err) { }
    var frames = e.stack.split('\n')
    var caller_line = frames[2]

    var components = /.+((?:http|file)\:\/\/[^\)]+)/.exec(caller_line)
    var uri = components[1]
    var uri_parts = /.+\/(.+)\:(.+)\:(.+)/.exec(uri)
    var file_name = uri_parts[1]
    var line_number = uri_parts[2]
    var colum_number = uri_parts[3]

    // @see https://stackoverflow.com/a/332429
    var results = /function (.{1,})\(/.exec((this).constructor.toString());
    var type_name = (results && results.length > 1) ? results[1] : "";

    var caller = full_path ? uri : (file_name + ':' + line_number)
    // @see https://stackoverflow.com/a/24850933
    var debug_info = caller + `: (${type_name}) ${this}`
    console.log(debug_info)
    console.log(this)
    console.log('\n')
};