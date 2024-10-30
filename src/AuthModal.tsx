import React from "react";
import { Modal } from "@precooked/react-modal";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    authMethods: Array<"username" | "facebook" | "instagram" | "github" | string>;
    allowRegistration?: boolean;
    registrationFields?: Array<{ name: string; label: string; type?: string }>;
    allowPasswordRecovery?: boolean;
    onLogin: (data: any) => void; // Puedes ajustar el tipo de `data` según tus necesidades
    onRegister?: (data: any) => void;
    onRecoverPassword?: (email: string) => void;
    backdropStyles?: React.CSSProperties;
    windowStyles?: React.CSSProperties;
    closeButtonStyles?: React.CSSProperties;
    closeIcon?: string;
    closeIconPaths?: any[];
    closeIconSize?: number;
}

const AuthModal: React.FC<AuthModalProps> = ({
    isOpen,
    onClose,
    authMethods,
    allowRegistration = false,
    registrationFields = [],
    allowPasswordRecovery = false,
    onLogin,
    onRegister,
    onRecoverPassword,
    backdropStyles,
    windowStyles,
    closeButtonStyles,
    closeIcon,
    closeIconPaths,
    closeIconSize,
}) => {
    // Aquí puedes manejar los estados y lógica para mostrar los formularios de login, registro, etc.

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            backdropStyles={backdropStyles}
            windowStyles={windowStyles}
            closeButtonStyles={closeButtonStyles}
            closeIcon={closeIcon}
            closeIconPaths={closeIconPaths}
            closeIconSize={closeIconSize}
        >
            {/* Aquí iría la lógica y diseño del formulario de autenticación */}
            <div>
                {/* Ejemplo de botones de autenticación */}
                {authMethods.includes("username") && (
                    <button onClick={() => {/* Lógica de login con usuario y contraseña */ }}>
                        Login with Username
                    </button>
                )}
                {authMethods.includes("facebook") && (
                    <button onClick={() => {/* Lógica de login con Facebook */ }}>
                        Login with Facebook
                    </button>
                )}
                {authMethods.includes("instagram") && (
                    <button onClick={() => {/* Lógica de login con Instagram */ }}>
                        Login with Instagram
                    </button>
                )}
                {authMethods.includes("github") && (
                    <button onClick={() => {/* Lógica de login con GitHub */ }}>
                        Login with GitHub
                    </button>
                )}

                {/* Opción de registro */}
                {allowRegistration && (
                    <div>
                        <h3>Register</h3>
                        {registrationFields.map((field) => (
                            <div key={field.name}>
                                <label>{field.label}</label>
                                <input type={field.type || "text"} name={field.name} />
                            </div>
                        ))}
                        <button onClick={() => {/* Lógica de registro */ }}>
                            Register
                        </button>
                    </div>
                )}

                {/* Opción de recuperación de contraseña */}
                {allowPasswordRecovery && (
                    <div>
                        <h3>Recover Password</h3>
                        <input type="email" placeholder="Enter your email" />
                        <button onClick={() => {/* Lógica de recuperación de contraseña */ }}>
                            Recover Password
                        </button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default AuthModal;
