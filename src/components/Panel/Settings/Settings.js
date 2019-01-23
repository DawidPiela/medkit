import React, { Component } from 'react';

import SettingsPhoto from './SettingsPhoto/SettingsPhoto';
import SettingsForm from './SettingsForm/SettingsForm';

class Settings extends Component {

    render() {

        return (
            <>
                <SettingsPhoto />
                <SettingsForm />
            </>
        )
    }
}

export default Settings