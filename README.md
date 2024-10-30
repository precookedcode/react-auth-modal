
# AuthModal

The `AuthModal` component provides a flexible modal for user authentication with various methods 
(e.g., username and password, social logins like Facebook, Instagram, GitHub). It also includes 
options for registration and password recovery.

## Installation

```bash
npm install @precooked/react-auth-modal
```

## Usage

```tsx
import React, { useState } from 'react';
import AuthModal from '@precooked/react-auth-modal';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLogin = (data) => {
        console.log("Login data:", data);
    };

    const handleRegister = (data) => {
        console.log("Registration data:", data);
    };

    const handleRecoverPassword = (email) => {
        console.log("Recover password for:", email);
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Auth Modal</button>
            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                authMethods={['username', 'facebook', 'instagram', 'github']}
                allowRegistration={true}
                registrationFields={[
                    { name: 'email', label: 'Email' },
                    { name: 'password', label: 'Password', type: 'password' }
                ]}
                allowPasswordRecovery={true}
                onLogin={handleLogin}
                onRegister={handleRegister}
                onRecoverPassword={handleRecoverPassword}
            />
        </div>
    );
};

export default App;
```

## Props

| Prop Name             | Type                                           | Description                                                                 | Default              |
|-----------------------|------------------------------------------------|-----------------------------------------------------------------------------|----------------------|
| `isOpen`              | `boolean`                                      | Controls the visibility of the modal.                                       | `false`              |
| `onClose`             | `() => void`                                   | Callback function triggered when the modal is closed.                       | -                    |
| `authMethods`         | `Array<'username' | 'facebook' | 'instagram' | 'github' | string>` | List of authentication methods available.                                   | `[]`                 |
| `allowRegistration`   | `boolean`                                      | Enables the registration option.                                            | `false`              |
| `registrationFields`  | `Array<{ name: string; label: string; type?: string }>` | Fields for the registration form.                                           | `[]`                 |
| `allowPasswordRecovery` | `boolean`                                    | Enables the password recovery option.                                       | `false`              |
| `onLogin`             | `(data: any) => void`                          | Callback function for handling login.                                       | -                    |
| `onRegister`          | `(data: any) => void`                          | Callback function for handling registration.                                | -                    |
| `onRecoverPassword`   | `(email: string) => void`                      | Callback function for handling password recovery.                           | -                    |
| `modalStyle`          | `React.CSSProperties`                          | Custom styles for the modal background.                                     | -                    |
| `windowStyle`         | `React.CSSProperties`                          | Custom styles for the modal window.                                         | -                    |
| `closeButtonStyle`    | `React.CSSProperties`                          | Custom styles for the close button.                                         | -                    |
| `closeIcon`           | `string`                                       | Icon for the close button.                                                  | `"close"`            |
| `closeIconPaths`      | `any[]`                                        | Paths for the DynamicIcon, if required.                                     | `[]`                 |
| `closeIconSize`       | `number`                                       | Size of the close button icon.                                              | `24`                 |

## License

MIT
