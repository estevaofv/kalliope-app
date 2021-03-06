/**
 * The model class corresponding to the Settings.
 * @class Settings
 */
export class Settings {
    // url of kalliope api server
    url: string = 'localhost:5000';
    username: string = '';
    password: string = '';

    // no_voice flag to mute kalliope
    noVoice: Boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}