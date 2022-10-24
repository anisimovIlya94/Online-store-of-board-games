import React from 'react';
import AccountUserInfo from './accountUserInfo';

const AccountSettings = () => {
    return (<div className='d-flex'>
        <div>
            <AccountUserInfo />
            <button>
        <i class="bi bi-folder-plus"></i>
        </button>
        </div>
        <div>
            <button>
                <i class="bi bi-tools"></i>
                изменить
            </button>
        </div>
    </div> );
}
 
export default AccountSettings;