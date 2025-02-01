import { useLocation } from "react-router-dom";

const useHeaderTitle = () => {
    const location = useLocation();

    const getHeaderTitle = () => {
        if (location.pathname === "/dashboard") {
            return "Dashboard";
        } else if (location.pathname === "/penjualan") {
            return "Penjualan";
        } else if (location.pathname === "pembelian") {
            return "Pembelian";
        } else if (location.pathname === "/pembayaran") {
            return "Pembayaran";
        } else if (location.pathname === "/marketing") {
            return "Marketing";
        }
        return "Dashboard";
    };

    return getHeaderTitle();
};

export default useHeaderTitle;