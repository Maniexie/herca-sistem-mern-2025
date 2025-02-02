import React from "react";
import { Alert } from "@material-tailwind/react";
import SuccessIcon from "../assets/svg/success.svg"

export default function AlertCustom({ children }) {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setOpen(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="z-50 text-center bg-amber-400">
            <Alert
                variant="gradient"
                open={open}
                icon={<img src={SuccessIcon} alt="Success Icon" className="h-6 w-6" />}
                className="text-black"
            >
                {children}
            </Alert>
        </div>
    );
}
