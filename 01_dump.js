// Note: dump object for more information
Object.prototype.dump = function (full_path = false) {

    let e = new Error('Could not parse input');
    try { throw e } catch (err) { }
    let frames = e.stack.split('\n');
    let caller_line = frames[2];

    let components = /.+((?:http|file)\:\/\/[^\)]+)/.exec(caller_line)
    let uri = components[1]
    let uri_parts = /.+\/(.+)\:(.+)\:(.+)/.exec(uri)
    let file_name = uri_parts[1]
    let line_number = uri_parts[2]
    let colum_number = uri_parts[3]

    // @see https://stackoverflow.com/a/332429
    let results = /function (.{1,})\(/.exec((this).constructor.toString());
    let type_name = (results && results.length > 1) ? results[1] : "";

    let caller = full_path ? uri : (file_name + ':' + line_number)
    // @see https://stackoverflow.com/a/24850933
    let debug_info = caller + `: (${type_name}) ${this}`;
    console.log(debug_info);
    console.log(this);
    console.log('\n');
};